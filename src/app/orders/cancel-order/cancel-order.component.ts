import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cancel-order',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './cancel-order.component.html',
  styleUrl: './cancel-order.component.scss'
})
export class CancelOrderComponent {
  orderId: string = ''; // Variable li ghadi n3tiwha ID dyal order bash n-cancelih
  response: any; // L-resulta mn l-API

  constructor(private ordersService: OrdersService) {}

  cancelOrder(): void {
    if (this.orderId) { // Check wach l-user 3amar ID
      this.ordersService.cancelOrder(this.orderId).subscribe(
        (res) => {
          this.response = res; // Khzen l-response li jat mn l-API
          console.log('Order t-canceli b-najah:', res);
        },
        (error) => {
          console.error('Error f-cancel dyal order:', error); // Affichage dyal error ila kan mochkil
        }
      );
    } else {
      console.error('Order ID darori'); // Naffichi error ila ma3tich ID
    }
  }
}
