import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-register-component',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register-component.html',
  styleUrl: './register-component.css'
})
export class RegisterComponent {
showLogin=false;
password: any;
email: any;
constructor(private router:Router){}
login(){
console.log('Logging in...')
 
}
register(){
  alert("Registered Successfully");
  console.log('Registering in...')
  this.router.navigate(['login']);
}
}
 
 