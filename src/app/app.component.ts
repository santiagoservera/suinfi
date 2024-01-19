import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { ButtonBoxComponent } from './components/button-box/button-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CardBoxComponent,ButtonBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suinfi';
}
