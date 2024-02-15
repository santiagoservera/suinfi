import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormContactService {

  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post('https://formulariocontacto-production.up.railway.app/api/v1/formularios', data);
  }

}