import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { LoaderComponent } from './Components/Loader/loader/loader.component';
import { FooterComponent } from './Components/Footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class NavigationModule { }
