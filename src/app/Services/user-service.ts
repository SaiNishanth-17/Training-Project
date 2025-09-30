
import { Injectable } from '@angular/core';
import { User } from '../Models/userService.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  addUser(user: User): boolean {
    const exists = this.users.some(u => u.email === user.email);
    if (exists) return false;

    this.users.push(user);
    return true;
  }

  validateUser(email: string, password: string): boolean {
    return this.users.some(
      user => user.email === email && user.password === password
    );
  }
  
private firstName: string = '';

  setFirstName(name: string) {
    this.firstName = name;
  }

  getFirstName(): string {
    return this.firstName;
  }
  getUserByEmail(email: string): User | undefined {
  return this.users.find(user => user.email === email);
}


}
