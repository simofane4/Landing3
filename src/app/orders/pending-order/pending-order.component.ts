import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pending-order',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './pending-order.component.html',
  styleUrl: './pending-order.component.scss'
})
export class PendingOrderComponent {
  pendingOrders: any[] = []; // L-lista dyal orders li pending
  response: any; // L-resulta mn API

  constructor(private ordersService: OrdersService) {}

  getPendingOrders(): void {
    this.ordersService.getPendingOrders().subscribe(
      (res) => {
        this.pendingOrders = res.orders || []; // Khzen orders pending mn API
        console.log('Pending orders:', res);
      },
      (error) => {
        console.error('Error f-fetching pending orders:', error); // Error handling
      }
    );
  }
}