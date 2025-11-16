import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header-component/header-component";
import { BodyComponent } from "../body-component/body-component";
import { FooterComponent } from "../footer-component/footer-component";
@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, CommonModule, BodyComponent, FooterComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}
