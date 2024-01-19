import { Component } from '@angular/core';
import { ButtonBoxComponent } from '../button-box/button-box.component';

@Component({
  selector: 'app-card-box',
  standalone: true,
  imports: [ButtonBoxComponent],
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.css'
})
export class CardBoxComponent {

}
