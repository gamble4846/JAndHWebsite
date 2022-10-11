import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen:boolean = false;

  menuData:any = [
    {name:"Home", route:"/"},
    {name:"About Us", route:"/"},
    {name:"Products", route:"/"},
    {name:"Services", route:"/"},
    {name:"Quote Now", route:"/"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  OpenMenu(){
    this.menuOpen = true;
  }

  CloseMenu(){
    this.menuOpen = false;
  }

  OpenRoute(menu:any){
    this.CloseMenu();
    if(menu.route == "justRefreshData"){
      this.RefreshData();
    }
    else{
      // this._cs.ChangePage(menu.route);
    }
  }

  RefreshData(){
    // this.LocalBase.SaveMoviesFromSheetAndToLocalBase().subscribe((response:any) => {
    //   this.CustomNotification.SmallMessage("success","Movies Updated");
    // });

    // this.LocalBase.SaveTvShowsFromSheetAndToLocalBase().subscribe((response:any) => {
    //   this.CustomNotification.SmallMessage("success","TvShows Updated");
    // });
  }

}
