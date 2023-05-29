import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleSheetDataAccessService } from './Services/GoogleSheetDataAccess/google-sheet-data-access.service';
import { CommonService } from './Services/CommonService/common.service';

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
  lastScrollPOS:number = 0;

  @ViewChild('jandhNameContainerHome') jandhNameContainerHome!:ElementRef;

  constructor(public _GsDa:GoogleSheetDataAccessService, public _cs:CommonService) { }

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
      this.apiData.dateTime = this._cs.getCorrectDateTime();
      this._GsDa.postViewerData(this.apiData).subscribe((response:any) => {
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

  ScrollForWebsiteName(){
    let routerContainer:any = document.getElementById("routerContainer");
    try{
      if (routerContainer.scrollTop > 30) {
        this.jandhNameContainerHome.nativeElement.style.display = "block";
      } else {
        this.jandhNameContainerHome.nativeElement.style.display = "none";
      }
    }
    catch(ex){}


    try{
      var st = routerContainer.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > this.lastScrollPOS) {
        this.jandhNameContainerHome.nativeElement.style.top = '70px';
        this.jandhNameContainerHome.nativeElement.style.bottom = 'unset';
      } else if (st < this.lastScrollPOS) {
        this.jandhNameContainerHome.nativeElement.style.top = 'unset';
        this.jandhNameContainerHome.nativeElement.style.bottom = '0px';
      } // else was horizontal scroll
      this.lastScrollPOS = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }
    catch(ex){
    }
  }
}
