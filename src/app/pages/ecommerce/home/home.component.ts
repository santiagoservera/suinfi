import { Component, OnInit } from '@angular/core';
import { HeaderCompComponent } from '../../../components/ecommerce/header-comp/header-comp.component';
import { FooterCompComponent } from '../../../components/ecommerce/footer-comp/footer-comp.component';
import { CarouselCompComponent } from '../../../components/ecommerce/carousel-comp/carousel-comp.component';
import { NavbarCompComponent } from '../../../components/ecommerce/navbar-comp/navbar-comp.component';
import { ProductsComponent } from '../../../components/ecommerce/products/products.component';
import { GaleriaComponent } from '../../../components/ecommerce/galeria/galeria.component';

//Service with api import
import {ArticulosApiService} from '../../../services/articulos-api.service'
import { IArticles } from '../../../models/article.model';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderCompComponent,FooterCompComponent,CarouselCompComponent,NavbarCompComponent, ProductsComponent, GaleriaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeECComponent  {

 
   

}
