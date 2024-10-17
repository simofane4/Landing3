import { Component, OnInit } from '@angular/core';
import { OrderStatusService } from '../services/order-status.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-get-order-statuses',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-order-statuses.component.html',
  styleUrls: ['./get-order-statuses.component.scss']
})
export class GetOrderStatusesComponent implements OnInit {
  statuses: any;
  jsonResponse: any;
  constructor(private orderStatusService: OrderStatusService) {}
  
  ngOnInit(): void {
    this.orderStatusService.getOrderStatuses().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.statuses = response.statuses;
          this.jsonResponse = response; 
        } else {
          console.error('Error: ', response);
        }
      },
      (error) => console.error('Error fetching statuses:', error)
    );
  }
}
