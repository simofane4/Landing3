import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import {RoutingSummaryComponent} from './routing-summary/routing-summary.component';

const routes: Routes = [
  { path: '',component:LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }, 
  { path: '', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: '', loadChildren: () => import('./domains/domains.module').then(m => m.DomainsModule) },
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: '', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
  { path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
  { path: '', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'r',
    component:RoutingSummaryComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'reset-password',
    component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
