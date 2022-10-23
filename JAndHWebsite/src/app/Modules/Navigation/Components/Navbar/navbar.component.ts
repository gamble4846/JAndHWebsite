import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen:boolean = false;

  menuData:any = [];

  constructor(private _cs: CommonService) { }

  ngOnInit(): void {
    this.menuData = this._cs.getMenuData();
  }

  OpenMenu(){
    this.menuOpen = true;
  }

  CloseMenu(){
    this.menuOpen = false;
  }

  OpenRoute(menu:any){
    this.CloseMenu();
    this._cs.changePage(menu.route,menu.elementId);
  }

}
