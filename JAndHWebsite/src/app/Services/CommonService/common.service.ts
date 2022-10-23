import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  menuData:any = [
    {name:"Home", route:"#Home"},
    {name:"About Us", route:"#AboutUs"},
    {name:"Products", route:"/"},
    {name:"Services", route:"/"},
    {name:"Quote Now", route:"/"},
  ];

  constructor() { }

  getMenuData(){
    return this.menuData;
  }
}
