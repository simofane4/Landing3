import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { OrdersRoutingModule } from './orders-routing.module';
import { GetProductsComponent } from './get-products/get-products.component';


@NgModule({
  declarations: [GetProductsComponent],
  imports: [
    
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule
  ],
  providers:[HttpClient,HttpClientModule]
})
export class OrdersModule { }
