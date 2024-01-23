import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardBoxComponent } from '../../components/card-box/card-box.component';
import { CardContactComponent } from '../../components/card-contact/card-contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardBoxComponent, CardContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
