import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/softwareFactory/navbar/navbar.component';
import { CardBoxComponent } from '../../../components/softwareFactory/card-box/card-box.component';
import { CardContactComponent } from '../../../components/softwareFactory/card-contact/card-contact.component';
import { ServicesComponent } from '../../../components/softwareFactory/services/services.component';

import { InfoComponent } from '../../../components/softwareFactory/info/info.component';
import { FooterComponent } from '../../../components/softwareFactory/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatWspComponent } from '../../../components/softwareFactory/chat-wsp/chat-wsp.component';
import { ProjectsComponent } from '../../../components/softwareFactory/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CardBoxComponent, CardContactComponent,ServicesComponent, ProjectsComponent , InfoComponent,FooterComponent,RouterLink,RouterOutlet,ChatWspComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
