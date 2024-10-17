import { Injectable } from '@angular/core'; // Hna kanst3mlo had l'import bach n3arfo lservice
import { HttpClient } from '@angular/common/http'; // Hna kanst3mlo HttpClient bach ndirou l'API requests
import { Observable } from 'rxjs'; // Hna kanst3mlo Observable bach nt3amlo m3a ldata li ghadi traja3 mn l'API
import { environment } from '../../../environments/environment'; // Hna kanst3mlo environment bach nakhdo l'configuration

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = environment.whmcsApiUrl; // Hna kan7eddo l'URL dyal l'API mn l'configuration


  constructor(private http: HttpClient) {} // Hna kanst3mlo HttpClient f constructor

  
  getOrder(): Observable<any> { // Hadi function li katjib l'order statuses
    const body = new URLSearchParams({ // Hna kanjibo ldata li ghadi nb3thouha l'API
      action: 'GetOrders', // L'action li bghina ndirou
      username: environment.apiIdentifier, // L'username mn l'configuration
      password: environment.apiSecret, // L'password mn l'configuration
      // pid: '1', // id 
      responsetype: 'json' // Nno3 dyal l'response li bghina
    });
    
    return this.http.post(this.apiUrl, body.toString(), { // Hna kanb3tho lrequest l'API
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // Hna kan7eddo l'content type
    });
  }


  // Accept an order
  acceptOrder(orderId: string): Observable<any> {
    const body = this.buildRequest('AcceptOrder', { orderid: orderId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add a new order
  addOrder(orderData: any): Observable<any> {
    const body = this.buildRequest('AddOrder', orderData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Cancel an order
  cancelOrder(orderId: string): Observable<any> {
    const body = this.buildRequest('CancelOrder', { orderid: orderId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete an order
  deleteOrder(orderId: string): Observable<any> {
    const body = this.buildRequest('DeleteOrder', { orderid: orderId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Mark an order as fraud
  fraudOrder(orderId: string): Observable<any> {
    const body = this.buildRequest('FraudOrder', { orderid: orderId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get promotions
  getPromotions(): Observable<any> {
    const body = this.buildRequest('GetPromotions', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Order fraud check
  orderFraudCheck(orderId: string): Observable<any> {
    const body = this.buildRequest('OrderFraudCheck', { orderid: orderId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get pending orders
  getPendingOrders(): Observable<any> {
    const body = this.buildRequest('PendingOrder', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Helper to build request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier);
    body.set('password', environment.apiSecret);
    body.set('responsetype', 'json');
    Object.keys(params).forEach((key) => body.set(key, params[key]));
    return body;
  }

  // Helper to get headers
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }
  
}
