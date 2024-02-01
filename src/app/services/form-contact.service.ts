import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

 constructor(private http: HttpClient) { }

  sendData(data: any) {
   return this.http.post('/src/app/components/php-form/index.php', data);
 }

}