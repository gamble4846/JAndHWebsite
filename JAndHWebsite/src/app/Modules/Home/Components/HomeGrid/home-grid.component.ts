import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {

  @Input() homeGridData:any = [];

  constructor(public _cs:CommonService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  showMoreClicked(data:any){
    this._cs.changePageOnlyRoute('/' + data.type + '/' + data.id);
  }
}
