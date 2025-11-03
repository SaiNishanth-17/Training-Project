import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../Models/userService'; 
import { UserRegisteringService } from '../../Services/user-registering-service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  showLogin = true;

  // Registration fields
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Login fields
  lemail: string = '';
  lpassword: string = '';
 
  constructor(private router: Router,
    private userService:UserRegisteringService
  ) {}
 
  register() {
    const email = this.email.trim().toLowerCase();
    const password = this.password;
    const firstname = this.firstname.trim();
    const lastname = this.lastname.trim();

    if (password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const newUser: User = { firstname, lastname, email, password };
    const success = this.userService.addUser(newUser);

    if (!success) {
      alert('Email already registered');
      return;
    }

    alert('Registered successfully! Please log in.');
    this.showLogin = true;
  }

  login() {
    const loginEmail = this.lemail.trim().toLowerCase();
    const loginPassword = this.lpassword;

    if (loginEmail === 'admin@gmail.com' && loginPassword === '123456') {
      // set current user as admin in user service for profile usage
      this.userService.setCurrentUser({ firstname: 'Admin', lastname: 'User', email: 'admin@gmail.com', password: '123456' } as any);
      this.router.navigate(['/admin-dashboard']);
      return;
    }
  
   
    
const isValid = this.userService.validateUser(loginEmail, loginPassword);
  if (isValid) {
    // Get the user object
    const user = this.userService.getUserByEmail(loginEmail);
    if (user) {
      this.userService.setCurrentUser(user);
    }

    this.router.navigate(['/student-dashboard']);
  } 
  else {
    alert('invalid credentials')
  }
  }
}
 
 