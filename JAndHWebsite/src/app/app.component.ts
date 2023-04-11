import { Component } from '@angular/core';
import { GoogleSheetDataAccessService } from './Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JAndHWebsite';
  showContactUsModal = false;
  FontData:any = {};

  constructor(public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this._GsDa.getFonts().subscribe((response:any) => {
      if(response.status == "200"){
        this.FontData = response.data[0];
      }
    })
  }

  hideContactUsModal(event:any){
    if(event){
      this.showContactUsModal = false;
    }
  }

  ShowContactUsModal(){
    this.showContactUsModal = true;
  }
}
