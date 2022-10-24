import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {

  @Input() homeGridData:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
