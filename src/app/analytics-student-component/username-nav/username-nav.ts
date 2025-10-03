import { Component, OnInit } from '@angular/core';
import { UserRegisteringService } from '../../Services/user-registering-service';


@Component({
  selector: 'app-username-nav',
  imports: [],
  templateUrl: './username-nav.html',
  styleUrl: './username-nav.css'
})
export class UsernameNav implements OnInit {
  firstname: string="";
  constructor(private userService:UserRegisteringService){}
  
  ngOnInit(): void {
    this.firstname=this.userService.getFirstName();
  }
  
  
  
}
