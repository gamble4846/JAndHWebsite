import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavbarComponent } from './Components/Navbar/navbar.component';
import { LoaderComponent } from './Components/Loader/loader/loader.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { ScrollToTopComponent } from './Components/ScrollToTop/scroll-to-top.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WhatsAppButtonComponent } from './Components/WhatsAppButton/whats-app-button.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FooterNewComponent } from './Components/FooterNew/footer-new.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    WhatsAppButtonComponent,
    FooterNewComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzCollapseModule,
    NzGridModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    WhatsAppButtonComponent,
    FooterNewComponent
  ]
})
export class NavigationModule { }
