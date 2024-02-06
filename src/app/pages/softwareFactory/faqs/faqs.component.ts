import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/softwareFactory/navbar/navbar.component';
import { FooterContactComponent } from '../../../components/softwareFactory/footer-contact/footer-contact.component';
import { FormContactComponent } from '../../../components/softwareFactory/form-contact/form-contact.component';
import { ChatWspComponent } from '../../../components/softwareFactory/chat-wsp/chat-wsp.component';


@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NavbarComponent, FooterContactComponent, FormContactComponent, CommonModule, ChatWspComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {}