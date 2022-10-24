import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Services/CommonService/common.service';

@Component({
  selector: 'app-opener',
  templateUrl: './opener.component.html',
  styleUrls: ['./opener.component.css']
})
export class OpenerComponent implements OnInit {
  ServiceId:any = null;

  constructor(public _cs:CommonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ServiceId = this.route.snapshot.paramMap.get('ServiceId');
    console.log("ServiceId",this.ServiceId);
  }

}
