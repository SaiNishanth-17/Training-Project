import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../Models/userService';
import { UserRegisteringService } from '../../Services/user-registering-service';
 
@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.css'],
})
export class RegisterComponent {
  showLogin = false;
 
  // Registration fields
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
 
  constructor(private router: Router, private userService: UserRegisteringService) {}
register(form: any) {
    if (form.valid) {
      if (!this.password) {
        alert('Password must be at least 8 characters long and include uppercase, lowercase, and a number.');
        return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }
    
const payload = {
  email: this.email,
  firstname: this.firstname,
  lastname: this.lastname,
  password: this.password,
  confirmPassword: this.confirmPassword
};
console.log('Register payload:', payload);
   this.userService.registerUser(payload).subscribe({
      next: (res) => {
        console.log(res)
        if (res.message=== 'User registered successfully') {
          form.resetForm();
          this.router.navigate(['/login'])}
          else {
            alert(res.message||'Registration failed.');
         }
       
      },
     
 error: (err) => {
  console.error('Unexpected error:', err);
  const validationErrors = err?.error?.errors;
  if (Array.isArray(validationErrors)) {
    const messages = validationErrors.map(e => e.msg).join('\n');
    alert(messages);
  } else {
    const fallback = err?.error?.message || 'Registration failed.';
    alert(fallback);
  }
}
})
}
}
}
