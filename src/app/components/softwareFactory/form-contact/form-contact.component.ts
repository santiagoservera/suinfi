import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';
import { FormContactService } from '../../../services/form-contact.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, HttpClientModule, TranslateModule, CommonModule],
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})

export class FormContactComponent implements OnInit {
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private service: FormContactService, private http: HttpClient) {}

  contactForm = new FormGroup({
    name: new FormControl(''),
    surName: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  ngOnInit() {
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
  }

  send() {
    this.service.sendData(this.contactForm.value).subscribe(
      (response) => {
        console.log(response);
        this.contactForm.reset();
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 4000);
      },
      (error) => {
        console.error(error);
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000);
      }
    );
  }
}