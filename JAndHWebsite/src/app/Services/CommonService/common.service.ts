import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  menuData:any = [
    {name:"Home", route:"/"},
    {name:"About Us", route:"/"},
    {name:"Products", route:"/"},
    {name:"Services", route:"/"},
    {name:"Quote Now", route:"/"},
  ];

  constructor() { }

  getMenuData(){
    return this.menuData;
  }
}
