import { NavbarCompComponent } from './../navbar-comp/navbar-comp.component';
import { Component } from '@angular/core';
@Component({
  selector: 'app-your-products',
  standalone: true,
  imports: [NavbarCompComponent],
  templateUrl: './your-products.component.html',
  styleUrl: './your-products.component.css'
})
export class YourProductsComponent {

}
