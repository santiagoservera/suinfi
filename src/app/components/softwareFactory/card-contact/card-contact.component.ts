import { Component } from '@angular/core';
import { FormContactComponent } from '../form-contact/form-contact.component';
import { MapContactComponent } from '../map-contact/map-contact.component';

@Component({
  selector: 'app-card-contact',
  standalone: true,
  imports: [FormContactComponent,MapContactComponent],
  templateUrl: './card-contact.component.html',
  styleUrl: './card-contact.component.css'
})
export class CardContactComponent {

}
