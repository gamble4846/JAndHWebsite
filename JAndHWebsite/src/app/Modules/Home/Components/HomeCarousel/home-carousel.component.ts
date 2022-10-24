import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  @Input() homeCarouselData:any = [];

  constructor(public _cs:CommonService) { }

  ngOnInit(): void {
    console.log(this.homeCarouselData);
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
