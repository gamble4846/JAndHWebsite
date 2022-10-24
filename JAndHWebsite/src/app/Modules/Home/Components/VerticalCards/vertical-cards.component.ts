import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-cards',
  templateUrl: './vertical-cards.component.html',
  styleUrls: ['./vertical-cards.component.css']
})
export class VerticalCardsComponent implements OnInit {

  @Input() makeToOrderData:any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.makeToOrderData);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

}
