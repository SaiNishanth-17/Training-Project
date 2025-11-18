import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
  lemail: string = '';
  lpassword: string = '';

  constructor(private router: Router,
    private userService:UserRegisteringService
  ) {}
 
   login(form: any) {
  if (form.valid) {
    const username = this.lemail;
    const password = this.lpassword;
    this.userService.authenticateUser(username, password).subscribe({
      next: (res: { token: any; role: string; }) => {
        console.log('Login response:', res);
        if (res.token) {
          this.userService.storeToken(res.token); 
          // console.log(JSON.stringify(res.token));
           const role=this.userService.getCurrentUserRole()
          // console.log(JSON.stringify(res));
          
          if (role === 'admin') {
            this.router.navigate(['admin-dashboard']);
            console.log('Navigating to admin dashboard');
          } else {
            this.router.navigate(['student-dashboard']);
            console.log('Navigating to user dashboard');
          }
        } else {
          alert('Invalid login response');
        }
      },
      error: () => {
        console.error('Login error');
        alert('Invalid username or password');
      }
    });
  } else {
    console.warn('Form is invalid');
  }
}

}
