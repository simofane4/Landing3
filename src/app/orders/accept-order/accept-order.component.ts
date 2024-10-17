import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-accept-order',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './accept-order.component.html',
  styleUrl: './accept-order.component.scss'
})
export class AcceptOrderComponent {
  orderId: string = ''; // ID dyal order li ghadi tqbel
  response: any; // L-resulta dyal API bach n'affichiwha

  constructor(private ordersService: OrdersService) {}

  acceptOrder(): void {
    if (this.orderId) { // Check wach l-user dkhal order ID
      this.ordersService.acceptOrder(this.orderId).subscribe(
        (res) => {
          this.response = res; // Khzen l-resulta dyal l-API
          console.log('Order tqbel b-najah:', res);
        },
        (error) => {
          console.error('Error f-qbel order:', error); // Error f l-request
        }
      );
    } else {
      console.error('Order ID darori');
    }
  }
}
