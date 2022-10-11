import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { LoaderComponent } from './Components/Loader/loader/loader.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavigationModule { }
