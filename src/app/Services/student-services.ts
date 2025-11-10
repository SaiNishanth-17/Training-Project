import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8001/api/auth';

  constructor(private http: HttpClient) {}

  updateProfile(firstname: string, lastname: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, { firstname, lastname });
  }
}
