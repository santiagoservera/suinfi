import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterContactComponent } from '../../components/footer-contact/footer-contact.component';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';


@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NavbarComponent, FooterContactComponent, FormContactComponent, CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {}