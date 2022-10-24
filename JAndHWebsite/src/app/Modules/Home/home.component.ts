import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productsData:any = [];
  serviceData:any = [];
  makeToOrderData:any = [];
  aboutUsData:any = {};
  footerData:any = [];
  homeCarouselData:any = [];

  constructor(public _cs:CommonService, public _GsDa:GoogleSheetDataAccessService) { }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(){
    this._cs.ShowLoader();
    let completeCount:number = 0;
    let totalApi:number = 5;

    this._GsDa.getProducts().subscribe((response:any) => {
      this.productsData = [...response.data];
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })

    this._GsDa.getServices().subscribe((response:any) => {
      this.serviceData = [...response.data];
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })

    this._GsDa.getMakeToOrder().subscribe((response:any) => {
      this.makeToOrderData = [...response.data];
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })

    this._GsDa.getAboutUs().subscribe((response:any) => {
      this.aboutUsData = response.data[0];
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })

    this._GsDa.getFooter().subscribe((response:any) => {
      this.footerData = [...response.data];
      completeCount++;
      this.apiGettingCompleted(completeCount, totalApi);
    })
  }

  apiGettingCompleted(currentCount:number, finalCount:number){
    if(currentCount >= finalCount){
      this._cs.HideLoader();
      this.setUpHomeCarouselData();
    }
  }

  setUpHomeCarouselData(){
    this.productsData.forEach((product:any) => {
      if(product.ShowOnHome){
        let homeCarouselDataObj:any = {};
        homeCarouselDataObj.id = product.ProductID;
        homeCarouselDataObj.image = product['Primary Image Link'];
        homeCarouselDataObj.header = product.Heading;
        homeCarouselDataObj.type = "Product";
        this.homeCarouselData.push(homeCarouselDataObj);
      }
    });

    this.serviceData.forEach((service:any) => {
      if(service.ShowOnHome){
        let homeCarouselDataObj:any = {};
        homeCarouselDataObj.id = service.ServiceID;
        homeCarouselDataObj.image = service['Primary Image Link'];
        homeCarouselDataObj.header = service.Heading;
        homeCarouselDataObj.type = "Service";
        this.homeCarouselData.push(homeCarouselDataObj);
      }
    });

    this.homeCarouselData = [...this.homeCarouselData];
  }

}
