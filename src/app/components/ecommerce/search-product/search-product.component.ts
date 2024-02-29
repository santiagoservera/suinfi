import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  signal,
} from '@angular/core';
import { NavbarCompComponent } from '../navbar-comp/navbar-comp.component';
import { HeaderCompComponent } from '../header-comp/header-comp.component';

import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject, switchMap, tap, catchError } from 'rxjs';
import { ArticulosApiService } from '../../../services/articulos-api.service';
import { IArticles } from '../../../models/article.model';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [
    NavbarCompComponent,
    HeaderCompComponent,
    LoaderComponent,
    CommonModule,
  ],
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent implements OnInit {
  @ViewChild(LoaderComponent) loader?: LoaderComponent;
  filteredArticles = signal<any>([]);
  articlesList = signal<any>([]);
  isLoading:boolean = false

  constructor(
    private route: ActivatedRoute,
    private articulosApiService: ArticulosApiService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const query = params['query'] || ''; // Obtener el parámetro "query" o usar una cadena vacía por defecto
      if (query) this.buscarProductos(query);
      
    });
  }

  buscarProductos(query: string) {
      this.isLoading = true
    
      
      this.articulosApiService.getDataByQuery(query).subscribe((data: any) => {
        // Convertir los datos de Buffer a ArrayBuffer
        
        const dataImg = data.map((img: any) => {
          const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;

          // Convertir el ArrayBuffer a Uint8Array
          const uint8Array = new Uint8Array(arrayBuffer);

          // Convertir los datos binarios en una cadena base64
          let binaryString = '';
          uint8Array.forEach((byte) => {
            binaryString += String.fromCharCode(byte);
          });
          const base64Data = btoa(binaryString);

          const dataUrl = `data:image/png;base64,${base64Data}`;
          

          return {
            id: img.id,
            imagenNew: dataUrl,
          };
        });
        
        const dataNew = data.map((item: any) => {
          return {
            ...item,
            imagen: dataImg.map((itemImg: any) => {
              return itemImg;
            }),
          };
        });
        this.articlesList.set(dataNew);
        
        this.isLoading = false
      });
    
  }
}
