import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-promotions',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './get-promotions.component.html',
  styleUrl: './get-promotions.component.scss'
})
export class GetPromotionsComponent implements OnInit {
  promotions: any;
  jsonResponse:any;
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.ordersService.getPromotions().subscribe(
      (response) => {
        if (response.result === 'success') {
          this.promotions = response.promotions.promotion;
          this.jsonResponse = response;
        } else {
          console.error('Error fetching promotions', response);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
