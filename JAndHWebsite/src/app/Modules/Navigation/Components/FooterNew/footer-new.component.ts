import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-footer-new',
  templateUrl: './footer-new.component.html',
  styleUrls: ['./footer-new.component.css']
})
export class FooterNewComponent implements OnInit {

  footerData: any = {};

  menuData: any = [];
  FontData: any = {};
  contactUsMenu: any = {};

  links: any = [
    {
      "text": "Random Password Generator",
      "routerLink": "/RandomPasswordGenerator",
    },
  ]

  constructor(public _cs: CommonService, public _GsDa: GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.menuData = this._cs.getMenuData();
    this.contactUsMenu = this._cs.GetContactUsMenu();
    this._GsDa.getFooter().subscribe((res: any) => {
      this.footerData = res.data[0];
    })
    this._GsDa.getFonts().subscribe((response: any) => {
      if (response.status == "200") {
        this.FontData = response.data[0];
      }
    })
  }

  OpenRoute(menu: any) {
    this._cs.changePage(menu.route, menu.elementId);
  }

  SocialClicked(social: string) {
    let url = "";
    switch (social) {
      case 'instagram':
        url = "https://www.instagram.com/gamble4846/";
        break;
      case 'github':
        url = "https://github.com/gamble4846";
        break;
      case 'linkedin':
        url = "https://www.linkedin.com/in/rohanpatel4846/";
        break;
      case 'reddit':
        url = "https://www.reddit.com/user/gamble4846";
        break;
      default:
        break;
    }
    window.open(url, '_blank')!.focus();
  }
}
