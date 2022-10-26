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

  ProductId:any = null;
  CoverImage:any = "";
  Title:any = "";
  currentProduct:any = {};
  currentInnerProducts:any = [];
  
  constructor(public _cs:CommonService, private route: ActivatedRoute, public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('ProductId');
    if(this.ProductId == null){
      this._cs.changePageOnlyRoute("Home");
    }

    try{
      this.ProductId = Number(this.ProductId);
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

    this._GsDa.getProducts().subscribe((response:any) => {
      this.currentProduct = response.data.find((x:any) => x.ProductID == this.ProductId);
      this.CoverImage = this.currentProduct['Secondary Image Link'];
      this.Title = this.currentProduct.Heading;
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    });

    this._GsDa.getInnerProducts().subscribe((response:any)=>{
      this.currentInnerProducts = response.data.filter((x:any) => x.ProductID == this.ProductId);
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })
  }

  apiGettingCompleted(currentCount:number, finalCount:number){
    if(currentCount >= finalCount){
      this._cs.HideLoader();
      console.log(this.currentInnerProducts);
    }
  }

  cardClicked(innerProduct:any){
    let quoteElement: HTMLElement = document.createElement("div");
    quoteElement = document.getElementById("quoteSpan") as HTMLElement;
    quoteElement.innerHTML = innerProduct['Inner Product Code'];

    localStorage.setItem("currentInnerItemCode", innerProduct['Inner Product Code']);

    this._cs.ShowContactUsModal();
  }

}
