import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule ],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.scss'
})
export class AddOrderComponent {
  orderData = {
    clientid: '', // Replace with actual client ID
    pid: '1', // Replace with actual product ID
    domain: 'example.com',
    paymentmethod: 'paypal',
    billingcycle: 'monthly'
  };
  response: any;

  constructor(private ordersService: OrdersService) {}

  addOrder(): void {
    this.ordersService.addOrder(this.orderData).subscribe(
      (res) => {
        this.response = res;
        console.log('Order added successfully:', res);
      },
      (error) => {
        console.error('Error adding order:', error);
      }
    );
  }
}
