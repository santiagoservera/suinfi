import { Component } from '@angular/core';
import { NavbarCompComponent } from '../navbar-comp/navbar-comp.component';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [NavbarCompComponent],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {

}
