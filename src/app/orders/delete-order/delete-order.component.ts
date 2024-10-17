import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-delete-order',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './delete-order.component.html',
  styleUrl: './delete-order.component.scss'
})
export class DeleteOrderComponent {
  orderId: string = ''; // Variable li kay khzen ID dyal order bash nmhih
  response: any; // Variable li khzenna fiha l-response dyal API

  constructor(private ordersService: OrdersService) {}

  deleteOrder(): void {
    if (this.orderId) { // Check wach l-user 3amar ID
      this.ordersService.deleteOrder(this.orderId).subscribe(
        (res) => {
          this.response = res; // Khzen l-resulta mn l-API
          console.log('Order t-mha b-najah:', res);
        },
        (error) => {
          console.error('Error f-delete order:', error); // Affichage dyal error f-console
        }
      );
    } else {
      console.error('Order ID darori'); // Naffichi error ila ma3tina l-ID
    }
  }
}
