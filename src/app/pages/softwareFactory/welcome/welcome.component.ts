import { Component , Input} from '@angular/core';
import { CardBoxComponent } from '../../../components/softwareFactory/card-box/card-box.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '../../../components/softwareFactory/chatbot/chatbot.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardBoxComponent,RouterOutlet,RouterLink,ChatbotComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  @Input() imageFront: string = '/assets/images/logox.png';

  @Input() imageSoftwareFactory: string = '/assets/images/card-back.webp';
  @Input() imageEcommerce: string = '/assets/images/ecommerceBack.webp';
}
