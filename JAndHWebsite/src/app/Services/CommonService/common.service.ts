import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  menuData:any = [
    {name:"Home", route:"/Home", elementId:"Home"},
    {name:"About Us", route:"/Home", elementId:"AboutUs"},
    {name:"Products", route:"/Home", elementId:"Products"},
    {name:"Services", route:"/Home", elementId:"Services"},
    {name:"Get Your Quote", route:"/Home", elementId:"QuoteNow"},
  ];

  constructor(private router:Router, private message: NzMessageService) { }

  getMenuData(){
    return this.menuData;
  }

  GetContactUsMenu(){
    return {name:"Contact Us", route:"/Home", elementId:"ContactUs"}
  }

  changePage(route:string, elementId:string){
    this.router.navigate([route]);

    setTimeout(() => {
      let element:any = document.getElementById(elementId);
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 100);
  }

  changePageOnlyRoute(route:string){
    this.router.navigate([route]);
  }

  ShowContactUsModal(){
    document.getElementById("ShowContactUsModalBTN")?.click();
  }

  ShowLoader(){
    document.getElementById("loaderContainer")?.classList.add("show");
  }

  HideLoader(){
    document.getElementById("loaderContainer")?.classList.remove("show");
  }

  getRenderedHtml(data:string){
    try{
      let htmlSTR:string = data;
      htmlSTR = htmlSTR.replaceAll("&anter","<br>");
      htmlSTR = htmlSTR.replaceAll("&plus","+");
      return htmlSTR;
    }
    catch(ex){
      return data;
    }
  }

  showMessage(type: string, message:string): void {
    this.message.create(type, message);
  }
}
