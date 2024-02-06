import { Component } from '@angular/core';
import { HeaderCompComponent } from '../../../components/ecommerce/header-comp/header-comp.component';
import { FooterCompComponent } from '../../../components/ecommerce/footer-comp/footer-comp.component';
import { CarouselCompComponent } from '../../../components/ecommerce/carousel-comp/carousel-comp.component';
import { NavbarCompComponent } from '../../../components/ecommerce/navbar-comp/navbar-comp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderCompComponent,FooterCompComponent,CarouselCompComponent,NavbarCompComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeECComponent {

}
