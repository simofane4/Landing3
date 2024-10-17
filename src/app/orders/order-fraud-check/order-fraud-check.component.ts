import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-fraud-check',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './order-fraud-check.component.html',
  styleUrl: './order-fraud-check.component.scss'
})
export class OrderFraudCheckComponent {
  orderId: string = ''; // ID dyal order bash ncheckiw fraud
  response: any; // L-resulta mn API

  constructor(private ordersService: OrdersService) {}

  checkFraud(): void {
    if (this.orderId) { // Check wach l-user 3amar ID
      this.ordersService.orderFraudCheck(this.orderId).subscribe(
        (res) => {
          this.response = res; // Khzen l-resulta
          console.log('Fraud check tkamal:', res);
        },
        (error) => {
          console.error('Error f-check fraud:', error); // Error handling
        }
      );
    } else {
      console.error('Order ID darori'); // ID darori bash nsift request
    }
  }
}
