import { Component , OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ArticulosApiService} from '../../../services/articulos-api.service'
import { IArticles } from '../../../models/article.model';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  articlesList = signal<any>([])

  constructor(private articulosApi:ArticulosApiService){}

  ngOnInit(): void {
    this.articulosApi.getData().subscribe((data:any) =>{
      this.articlesList.set(data)
    })
  }

}
