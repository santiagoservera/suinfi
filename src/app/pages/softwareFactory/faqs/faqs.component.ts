import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../components/softwareFactory/navbar/navbar.component';
import { FooterContactComponent } from '../../../components/softwareFactory/footer-contact/footer-contact.component';
import { FormContactComponent } from '../../../components/softwareFactory/form-contact/form-contact.component';
import { ChatWspComponent } from '../../../components/softwareFactory/chat-wsp/chat-wsp.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormContactService } from '../../../services/form-contact.service';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NavbarComponent, FooterContactComponent, FormContactComponent, CommonModule, ChatWspComponent, FormsModule, ReactiveFormsModule,TranslateModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  constructor(private service: FormContactService) { }

  contactForm = new FormGroup({
    name: new FormControl(''),
    surName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  send() {
    this.service.sendData(this.contactForm.value).subscribe((response) => {
      try {
        console.log(response);
        this.contactForm.reset();
      } catch (e) {
        console.error(e);
      }
    });
  }
}