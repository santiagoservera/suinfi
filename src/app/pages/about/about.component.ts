import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FooterContactComponent } from '../../components/footer-contact/footer-contact.component';
import { ChatWspComponent } from '../../components/chat-wsp/chat-wsp.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent, FooterContactComponent, ChatWspComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
