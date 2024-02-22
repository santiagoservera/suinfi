import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//model
import { IArticles } from '../models/article.model';



@Injectable({
  providedIn: 'root'
})
export class ArticulosApiService {

  private articlesApiUrl = 'https://ecommerce-suinfi-production.up.railway.app/api/v1/articulos/findAll?limit=10&offset=10'

  constructor(private http:HttpClient) { }

  public getData(): Observable<IArticles>{
    return this.http.get<IArticles>(`${this.articlesApiUrl}`);
  }

  public postData(data:IArticles):Observable<IArticles>{
    return this.http.post<IArticles>(`${this.articlesApiUrl}`,data)
  }

}
