import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  @Input() homeCarouselData:any = [];
  @ViewChild(NzCarouselComponent, { static: false }) myCarousel: NzCarouselComponent | undefined;

  constructor(public _cs:CommonService) { }

  ngOnInit(): void {
    
    setInterval(() => { this.myCarousel?.next(); }, 5000);
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  exploreNowClicked(data:any){
    this._cs.changePageOnlyRoute('/' + data.type + '/' + data.id);
  }
}
