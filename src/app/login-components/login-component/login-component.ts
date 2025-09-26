import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  showLogin = true;
  email: string = '';
password: any;
 
  constructor(private router: Router) {}
 
  login() {
    const emailLower = this.email.trim().toLowerCase();
 
    if (emailLower === 'admin@gmail.com') {
      console.log('Navigating to admin dashboard');
      this.router.navigate(['/admin-dashboard']);
    } else {
      console.log('Navigating to student dashboard');
      this.router.navigate(['/student-dashboard']);
    }
  }
 
  register() {
    alert('Registered successfully');
    this.showLogin = true;
  }
}
 
 