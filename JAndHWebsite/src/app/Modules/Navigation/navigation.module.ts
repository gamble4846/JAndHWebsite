import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { LoaderComponent } from './Components/Loader/loader/loader.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { ScrollToTopComponent } from './Components/ScrollToTop/scroll-to-top.component';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    NzButtonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ]
})
export class NavigationModule { }
