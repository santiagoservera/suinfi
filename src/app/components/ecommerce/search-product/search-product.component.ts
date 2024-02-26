import { AfterViewInit, Component, OnInit, ViewChild, signal } from '@angular/core';
import { NavbarCompComponent } from '../navbar-comp/navbar-comp.component';
import { HeaderCompComponent } from '../header-comp/header-comp.component';

import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, switchMap, tap, catchError } from 'rxjs';
import { ArticulosApiService } from "../../../services/articulos-api.service";
import { IArticles } from "../../../models/article.model";
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [NavbarCompComponent, HeaderCompComponent,LoaderComponent,CommonModule],
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements AfterViewInit {
  @ViewChild(LoaderComponent) loader?: LoaderComponent;
  filteredArticles = signal<any>([]);
  articlesList = signal<any>([]);
  

  constructor(private route: ActivatedRoute, private articulosApiService: ArticulosApiService) {}
  

  ngAfterViewInit() {
    
      this.route.queryParams.subscribe(params => {
        const query = params['query'] || ''; // Obtener el parámetro "query" o usar una cadena vacía por defecto
        this.buscarProductos(query);
      } );

    
    
  }
   
  buscarProductos(query: string) {
    setTimeout(() => {

      this.loader?.showLoader(true);
      this.articulosApiService.getDataByQuery(query)
      .subscribe(data => {
        console.log(data)
        this.articlesList.set(data);
        this.loader?.showLoader(false)
      });
      
    },)
    
  }
}
