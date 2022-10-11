import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsCarouselComponent } from './Components/ProductsCarousel/products-carousel.component';
import { HomeCarouselComponent } from './Components/HomeCarousel/home-carousel.component';
import { ServicesCarouselComponent } from './Components/ServicesCarousel/services-carousel.component';
import { NavigationModule } from '../../Modules/Navigation/navigation.module';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';




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
    NzCarouselModule,
    NzButtonModule,
    NavigationModule
  ]
})
export class HomeModule { }
