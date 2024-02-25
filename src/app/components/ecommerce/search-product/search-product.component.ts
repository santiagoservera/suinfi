import { Component, OnInit, signal } from '@angular/core';
import { NavbarCompComponent } from '../navbar-comp/navbar-comp.component';
import { HeaderCompComponent } from '../header-comp/header-comp.component';

import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, switchMap, tap, catchError } from 'rxjs';
import { ArticulosApiService } from "../../../services/articulos-api.service";
import { IArticles } from "../../../models/article.model";

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [NavbarCompComponent, HeaderCompComponent],
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  filteredArticles = signal<any>([]);
  articlesList = signal<any>([]);

  searchQuery$ = new BehaviorSubject<string>('');

  constructor(private route: ActivatedRoute, private articulosApiService: ArticulosApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const query = params['query'] || ''; // Obtener el parámetro "query" o usar una cadena vacía por defecto
      this.buscarProductos(query);
    });
  }

  buscarProductos(query: string) {
    this.articulosApiService.getDataByQuery(query)
      .subscribe(data => {
        console.log('Artículos obtenidos:', data); // Registrar artículos obtenidos en la consola
        this.articlesList.set(data);
      });
  }
}
