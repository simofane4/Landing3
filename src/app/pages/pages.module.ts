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
import { FormsModule } from '@angular/forms';



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
    FormsModule,
    SlickCarouselModule

  ]
})
export class PagesModule { }
