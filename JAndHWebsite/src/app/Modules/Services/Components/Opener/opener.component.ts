import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {
  ServiceId:any = null;
  CoverImage:any = "";
  Title:any = "";
  currentService:any = {};
  currentInnerServices:any = [];

  constructor(public _cs:CommonService, private route: ActivatedRoute, public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.ServiceId = this.route.snapshot.paramMap.get('ServiceId');
    if(this.ServiceId == null){
      this._cs.changePageOnlyRoute("Home");
    }
    try{
      this.ServiceId = Number(this.ServiceId);
    }
    catch(ex){
      this._cs.changePageOnlyRoute("Home");
    }

    this.getData();
  }

  getData(){
    this._cs.ShowLoader();
    let completeCount:number = 0;
    let totalApi:number = 2;

    this._GsDa.getServices().subscribe((response:any) => {
      this.currentService = response.data.find((x:any) => x.ServiceID == this.ServiceId);
      this.CoverImage = this.currentService['Secondary Image Link'];
      this.Title = this.currentService.Heading;
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    });

    this._GsDa.getInnerServices().subscribe((response:any)=>{
      this.currentInnerServices = response.data.filter((x:any) => x.ServiceID == this.ServiceId);
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })
  }

  apiGettingCompleted(currentCount:number, finalCount:number){
    if(currentCount >= finalCount){
      this._cs.HideLoader();
    }
  }

  cardClicked(innerService:any){
    let quoteElement: HTMLElement = document.createElement("div");
    quoteElement = document.getElementById("quoteSpan") as HTMLElement;
    quoteElement.innerHTML = innerService['Inner Service Code'];

    localStorage.setItem("currentInnerItemCode", innerService['Inner Service Code']);

    this._cs.ShowContactUsModal();
  }
}
