import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-contact',
  standalone: true,
  imports: [FooterComponent, TranslateModule],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.css'
})
export class FooterContactComponent {

}
