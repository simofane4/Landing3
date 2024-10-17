import { Component , OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-orders',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-orders.component.html',
  styleUrl: './get-orders.component.scss'
})
export class GetOrdersComponent implements OnInit {
  orders : any;
  jsonResponse : any ;
  constructor(private ordersService:OrdersService){}
  ngOnInit(): void {
    this.ordersService.getOrder().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.orders = response.orders;
          this.jsonResponse = response; 
        } else {
          console.error('Error: ', response);
        }
      },
      (error) => console.error('Error fetching statuses:', error)
    );
  }

}
