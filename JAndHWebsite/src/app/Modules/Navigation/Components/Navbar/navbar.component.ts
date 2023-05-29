import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen:boolean = false;

  menuData:any = [];
  navbarData:any = {};
  navarbarLogo:string = "";
  contactUsMenu:any = {};

  constructor(public _cs: CommonService,  public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.menuData = this._cs.getMenuData();
    this.contactUsMenu = this._cs.GetContactUsMenu();
    this._GsDa.getMainData().subscribe((response:any) => {
      this.navbarData = response.data[0];
      this.navarbarLogo = this.navbarData.Logo;

      let titleelement: HTMLElement = document.createElement("div");

      document.getElementById("mainFavicon")?.setAttribute("href", this.navbarData.Icon);
      titleelement = document.getElementById("mainTitle") as HTMLElement;
      titleelement.innerHTML = this.navbarData.Title;
    })
  }

  OpenMenu(){
    this.menuOpen = true;
  }

  CloseMenu(){
    this.menuOpen = false;
  }

  ToggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  OpenRoute(menu:any){
    this.CloseMenu();
    this._cs.changePage(menu.route,menu.elementId);
  }

  goToHome(){
    this._cs.changePage("Home","Home");
  }

}
