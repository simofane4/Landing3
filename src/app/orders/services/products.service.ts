import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  private apiUrl = environment.whmcsApiUrl;
  getProducts(): Observable<any> {
    const body = new URLSearchParams({
      action: 'GetProducts',
      username: environment.apiIdentifier,
      password: environment.apiSecret,
      //pid: '1',
      responsetype: 'json'
    });

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}