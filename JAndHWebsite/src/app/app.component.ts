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
  apiData:any = {};

  constructor(public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this._GsDa.getFonts().subscribe((response:any) => {
      if(response.status == "200"){
        this.FontData = response.data[0];
      }
    })

    this._GsDa.getUserData().subscribe((response:any) => {
      this.apiData = response;
      this.apiData.method = "POST";
      this.apiData.Action = "VIEWERDATA";
      console.log("View Count",this.apiData);
      this._GsDa.postViewerData(this.apiData).subscribe((response:any) => {
        console.log(response);
      })
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
