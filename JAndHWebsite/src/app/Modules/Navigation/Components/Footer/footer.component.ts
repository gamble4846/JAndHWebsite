import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerData:any = {};
  
  menuData:any = [];
  contactUsMenu:any = {};

  constructor(public _cs: CommonService, public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.menuData = this._cs.getMenuData();
    this.contactUsMenu = this._cs.GetContactUsMenu();
    this._GsDa.getFooter().subscribe((res:any) => {
      this.footerData = res.data[0];
    })
  }

  OpenRoute(menu:any){
    this._cs.changePage(menu.route,menu.elementId);
  }

}
