import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Swiper
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Page Route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

// Component
import { IndexComponent } from './index/index.component';

import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';



@NgModule({
  declarations: [
    IndexComponent,
    BloglistComponent,
    BlogdetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class PagesModule { }
