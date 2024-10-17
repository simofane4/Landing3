import { Injectable } from '@angular/core'; // Hna kanst3mlo had l'import bach n3arfo lservice
import { HttpClient } from '@angular/common/http'; // Hna kanst3mlo HttpClient bach ndirou l'API requests
import { Observable } from 'rxjs'; // Hna kanst3mlo Observable bach nt3amlo m3a ldata li ghadi traja3 mn l'API
import { environment } from '../../../environments/environment'; // Hna kanst3mlo environment bach nakhdo l'configuration

@Injectable({
  providedIn: 'root' // Hadi lservice ghadi tkoun disponible f kol l'app
})
export class OrderStatusService {
  private apiUrl = environment.whmcsApiUrl; // Hna kan7eddo l'URL dyal l'API mn l'configuration

  constructor(private http: HttpClient) {} // Hna kanst3mlo HttpClient f constructor

  getOrderStatuses(): Observable<any> { // Hadi function li katjib l'order statuses
    const body = new URLSearchParams({ // Hna kanjibo ldata li ghadi nb3thouha l'API
      action: 'GetOrderStatuses', // L'action li bghina ndirou
      username: environment.apiIdentifier, // L'username mn l'configuration
      password: environment.apiSecret, // L'password mn l'configuration
      responsetype: 'json' // Nno3 dyal l'response li bghina
    });
    
    return this.http.post(this.apiUrl, body.toString(), { // Hna kanb3tho lrequest l'API
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // Hna kan7eddo l'content type
    });
  }
  
}