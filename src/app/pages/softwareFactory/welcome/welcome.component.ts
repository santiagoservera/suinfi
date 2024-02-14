import { Component , Input, OnDestroy, Renderer2 } from '@angular/core';
import { CardBoxComponent } from '../../../components/softwareFactory/card-box/card-box.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChatbotComponent } from '../../../components/softwareFactory/chatbot/chatbot.component';

declare global {
  interface Window {
    Landbot: {
      Livechat: any; // Ajusta el tipo según la estructura del objeto Landbot.Livechat
    };
    myLandbot?: any; // Ajusta el tipo según la estructura de myLandbot
  }
}

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardBoxComponent,RouterOutlet,RouterLink,ChatbotComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnDestroy  {
  //Image props
  @Input() imageFront: string = '/assets/images/logox.png';
  @Input() imageSoftwareFactory: string = '/assets/images/card-back.webp';
  @Input() imageEcommerce: string = '/assets/images/ecommerceBack.webp';

  //chatbot

  private scriptLoaded = false;

  constructor(private renderer: Renderer2) {
    this.loadScriptIfNeeded();
  }
  

  private loadScriptIfNeeded() {
    if (this.scriptLoaded) {
      return;
    }

    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.async = true;


    if (window.location.pathname === '/welcome' || '/'){
      console.log('hola')

      script.addEventListener('load', () => {
        this.initLandbot();
      });
    }

    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';

    const body = document.getElementsByTagName('body')[0];

    this.renderer.appendChild(body, script);

    this.scriptLoaded = true;
  }

  private initLandbot() {
    if (!window['myLandbot']) {
      window['myLandbot'] = new window['Landbot'].Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2119484-WOXX9A07PZ5N6IFB/index.json',
      });
    }
  }

  ngOnDestroy() {
    // Limpiar el script al destruir el componente para evitar problemas de memoria
    const script = document.querySelector('script[src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.js"]');
    if (script) {
      script.parentNode?.removeChild(script);
    }
  }



}

