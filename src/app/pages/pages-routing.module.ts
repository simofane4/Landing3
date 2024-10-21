import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { IndexComponent } from './index/index.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'blog-list',
    component:BloglistComponent
  },
  {
    path:'blog-details',
    component:BlogdetailsComponent
  },
  {
    path:'cart',
    component:CartComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
