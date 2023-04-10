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
import { NzGridModule } from 'ng-zorro-antd/grid';
import { HomeGridComponent } from './Components/HomeGrid/home-grid.component';
import { VerticalCardsComponent } from './Components/VerticalCards/vertical-cards.component';
import { ModalModule } from '../../gs-lib/modal/modal.module';
import { ContactUsFormNewComponent } from './Components/ContactUsFormNew/contact-us-form-new.component';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsCarouselComponent,
    HomeCarouselComponent,
    ServicesCarouselComponent,
    ContactUsFormComponent,
    HomeGridComponent,
    VerticalCardsComponent,
    ContactUsFormNewComponent
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
    NzInputModule,
    NzGridModule,
    ModalModule,
    NzIconModule
  ],
  exports:[
    ContactUsFormComponent
  ]
})
export class HomeModule { }
