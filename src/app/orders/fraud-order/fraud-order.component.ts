import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fraud-order',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './fraud-order.component.html',
  styleUrl: './fraud-order.component.scss'
})
export class FraudOrderComponent {
  orderId: string = ''; // ID dyal order li ghadi n9aydu fraud
  response: any; // L-resulta mn l-API

  constructor(private ordersService: OrdersService) {}

  markAsFraud(): void {
    if (this.orderId) { // Check wach l-user 3amar ID
      this.ordersService.fraudOrder(this.orderId).subscribe(
        (res) => {
          this.response = res; // Khzen l-resulta mn l-API
          console.log('Order t9ayd fraud b-najah:', res);
        },
        (error) => {
          console.error('Error f-marking fraud:', error); // Affichage dyal error f-console
        }
      );
    } else {
      console.error('Order ID darori'); // Naffichi error ila ma3tina ID
    }
  }
}
