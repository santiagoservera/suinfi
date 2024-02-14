import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-card-box',
  standalone: true,
  imports: [],
  templateUrl: './card-box.component.html',
  styleUrl: './card-box.component.css'
})
export class CardBoxComponent {
  //Frontface image
  @Input() imageFront: string = '';

  //Backface image
  @Input() imageBack: string = '';
  
  //Route button
  @Input() buttonLink: string = ''; 
}
