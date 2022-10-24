import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {

  ProductId:any = null;
  
  constructor(public _cs:CommonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ProductId = this.route.snapshot.paramMap.get('ProductId');
    console.log("ProductId",this.ProductId);
  }

}
