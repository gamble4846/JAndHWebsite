import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetDataAccessService {

  apiLink:string = "https://script.google.com/macros/s/AKfycbwRiRtId_9c8rENMjOemSSrAKKmmU9IhKyFaVbRz8kpGrtOKqNpPnGAmePTeWDuDf0/exec";
  constructor(private http: HttpClient) { }

  getOptions(){
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return options;
  }

  getProducts(){
    var body ={
      "method": "GET",
      "Action": "PRODUCTS"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getServices(){
    var body ={
      "method": "GET",
      "Action": "SERVICES"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getMakeToOrder(){
    var body ={
      "method": "GET",
      "Action": "MAKETOORDER"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getAboutUs(){
    var body ={
      "method": "GET",
      "Action": "ABOUTUS"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getFooter(){
    var body ={
      "method": "GET",
      "Action": "FOOTER"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getInnerProducts(){
    var body ={
      "method": "GET",
      "Action": "INNERPRODUCTS"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getInnerServices(){
    var body ={
      "method": "GET",
      "Action": "INNERSERVICES"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getUserData(){
    return this.http.get("https://api.db-ip.com/v2/free/self");
  }

  postContactUsForm(body:any){
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  postViewerData(body:any){
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getMainData(){
    var body ={
      "method": "GET",
      "Action": "MAIN"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }

  getFonts(){
    var body ={
      "method": "GET",
      "Action": "FONTS"
    };
    return this.http.post(this.apiLink, body, this.getOptions());
  }
}
