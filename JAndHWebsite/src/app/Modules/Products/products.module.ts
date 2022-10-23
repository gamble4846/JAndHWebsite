import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { OpenerComponent } from './Components/Opener/opener.component';
import { NavigationModule } from '../Navigation/navigation.module';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    OpenerComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavigationModule,
    NzGridModule,
    NzCardModule
  ]
})
export class ProductsModule { }
