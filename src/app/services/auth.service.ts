import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(user: any) {
    const apiUrl = 'https://ecommerce-suinfi-production.up.railway.app/api/v1/auth/register'; // Replace with your actual API URL
    return this.http.post(apiUrl, user);
  }
}