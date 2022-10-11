import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductsCarouselComponent } from './Components/ProductsCarousel/products-carousel.component';
import { HomeCarouselComponent } from './Components/HomeCarousel/home-carousel.component';
import { ServicesCarouselComponent } from './Components/ServicesCarousel/services-carousel.component';
import { NavigationModule } from '../../Modules/Navigation/navigation.module';
import { ContactUsFormComponent } from './Components/ContactUsForm/contact-us-form.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';




@NgModule({
  declarations: [
    HomeComponent,
    ProductsCarouselComponent,
    HomeCarouselComponent,
    ServicesCarouselComponent,
    ContactUsFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    NavigationModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule
  ]
})
export class HomeModule { }
