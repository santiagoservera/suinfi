import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/softwareFactory/navbar/navbar.component';
import { FooterComponent } from '../../../components/softwareFactory/footer/footer.component';
import { FooterContactComponent } from '../../../components/softwareFactory/footer-contact/footer-contact.component';
import { ChatWspComponent } from '../../../components/softwareFactory/chat-wsp/chat-wsp.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, FooterContactComponent, ChatWspComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
