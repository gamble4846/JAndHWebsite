import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsCarouselComponent } from './Components/ProductsCarousel/products-carousel.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HomeCarouselComponent } from './Components/HomeCarousel/home-carousel.component';
import { ServicesCarouselComponent } from './Components/ServicesCarousel/services-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsCarouselComponent,
    HomeCarouselComponent,
    ServicesCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule
  ]
})
export class HomeModule { }
