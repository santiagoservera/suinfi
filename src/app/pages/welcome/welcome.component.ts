import { Component } from '@angular/core';
import { CardBoxComponent } from '../../components/card-box/card-box.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardBoxComponent,RouterOutlet,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
