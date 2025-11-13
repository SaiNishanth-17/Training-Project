import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/userService';
import { Observable } from 'rxjs';
interface AuthResponse{
  token:string;
  role:string
}
@Injectable({
  providedIn: 'root'
})
export class UserRegisteringService {
 
  private firstname: string = '';
 
    setFirstName(name: string) {
      this.firstname = name;
    }
 
    getFirstName(): string {
      return this.firstname;
    }
   
private tokenKey = 'authToken';
 
  constructor(private http: HttpClient) {}
 
  authenticateUser(email: string, password: string): Observable<AuthResponse> {
    console.log('Sending login payload:', { email, password });
    return this.http.post<AuthResponse>('http://localhost:8001/api/auth/login', { email, password });
  }
 
  registerUser(payload: {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
   
  }): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      'http://localhost:8001/api/auth/signup',
      payload
    );
  }
 logout(): void {
  const token = this.getToken(); 
  this.http.post<{ message: string }>('http://localhost:8001/api/auth/logout', {}, {
    headers: { Authorization: `Bearer ${token}` }
  }).subscribe({
    next: () => this.clearToken(),
    error: err => console.error('Logout failed:', err)
  });
}
  storeToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }
 
  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }
 
  clearToken(): void {
    sessionStorage.removeItem(this.tokenKey);
  }
 
decodeToken(): any {
  const token = this.getToken();
  if (!token) return null;
  const payload = token.split('.')[1];
  if (!payload) return null;
  try {
    const decodedPayload = atob(payload); // base64 decode
    return JSON.parse(decodedPayload);
  } catch (err) {
    console.error('Token decoding failed:', err);
    return null;
  }
}

 
  getCurrentUserRole(): string {
    const decoded = this.decodeToken();
    return decoded?.role || '';
  }
 
  getCurrentUserEmail(): string {
    const decoded = this.decodeToken();
    return decoded?.email || '';
  }
  getCurrentUserName():string{
    const decoded= this.decodeToken();
     return decoded?.firstname || '';
  }
  getUserByEmail(email: string): User | undefined {
    return this.decodeToken();
  }
}
 
  // Current logged-in user
//   const currentUser: User | null = null;
 
//   setCurrentUser(user: User) {
//     this.currentUser = user;
//     this.setFirstName(user.firstname);
//   }
 
//   getCurrentUser(): User | null {
//     return this.currentUser;
//   }
// }
 