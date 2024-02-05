import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardBoxComponent } from '../../components/card-box/card-box.component';
import { CardContactComponent } from '../../components/card-contact/card-contact.component';
import { ServicesComponent } from '../services/services.component';
import { ProjectsComponent } from '../projects/projects.component';
import { InfoComponent } from '../../components/info/info.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatWspComponent } from '../../components/chat-wsp/chat-wsp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardBoxComponent, CardContactComponent,ServicesComponent, ProjectsComponent, InfoComponent,FooterComponent,RouterLink,RouterOutlet,ChatWspComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
