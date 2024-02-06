import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';
import { FormContactService } from '../../../services/form-contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  constructor(private service: FormContactService,  private http: HttpClient) {}
  
  contactForm= new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl (''),
    message: new FormControl('')
    });
  
    send(){
     this.service.sendData(this.contactForm.value).subscribe((data) => {
        console.log(data);
     });
    }
  }