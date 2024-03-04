import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//model
import { IArticles } from '../models/article.model';



@Injectable({
  providedIn: 'root'
})
export class ArticulosApiService {

  //ArticleApi URL
  private articlesApiUrl = `https://ecommerce-suinfi-production.up.railway.app/api/v1/articulos/findAll?limit=30&offset=${50}`

  constructor(private http:HttpClient) { }


  //Get articles with URL
  public getData(): Observable<IArticles>{
    return this.http.get<IArticles>(`${this.articlesApiUrl}`);
  }

  public postData(data:IArticles):Observable<IArticles>{
    return this.http.post<IArticles>(`${this.articlesApiUrl}`,data)
  }
  //Search article by query
  public getDataByQuery(nombre: string): Observable<IArticles[]> {
    // Construye la URL correctamente, sincatenando los parámetros con '?' y '&'
    const url = `${this.articlesApiUrl}&nombre=${nombre}`;
  
    return this.http.get<IArticles[]>(url);
  }

  

}
