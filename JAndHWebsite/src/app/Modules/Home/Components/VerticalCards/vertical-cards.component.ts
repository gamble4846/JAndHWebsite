import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-vertical-cards',
  templateUrl: './vertical-cards.component.html',
  styleUrls: ['./vertical-cards.component.css']
})
export class VerticalCardsComponent implements OnInit {

  @Input() makeToOrderData:any = [];

  constructor(public _cs:CommonService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
