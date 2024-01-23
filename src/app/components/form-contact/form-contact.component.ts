import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  contactForm= new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl (''),
    message: new FormControl('')
    });

}
