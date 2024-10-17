import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptOrderComponent } from './accept-order/accept-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';
import { FraudOrderComponent } from './fraud-order/fraud-order.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import { GetOrderStatusesComponent } from './get-order-statuses/get-order-statuses.component';
import { GetProductsComponent } from './get-products/get-products.component';
import { GetPromotionsComponent } from './get-promotions/get-promotions.component';
import { OrderFraudCheckComponent } from './order-fraud-check/order-fraud-check.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';

const routes: Routes = [
  { path: 'accept', component: AcceptOrderComponent },
  { path: 'add', component: AddOrderComponent },
  { path: 'cancel', component: CancelOrderComponent },
  { path: 'delete', component: DeleteOrderComponent },
  { path: 'fraud', component: FraudOrderComponent },
  { path: 'list', component: GetOrdersComponent },
  { path: 'statuses', component: GetOrderStatusesComponent },
  { path: 'products', component: GetProductsComponent },
  { path: 'promotions', component: GetPromotionsComponent },
  { path: 'fraud-check', component: OrderFraudCheckComponent },
  { path: 'pending', component: PendingOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
