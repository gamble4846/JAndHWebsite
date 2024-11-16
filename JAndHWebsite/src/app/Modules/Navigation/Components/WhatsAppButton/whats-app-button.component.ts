import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-whats-app-button',
  templateUrl: './whats-app-button.component.html',
  styleUrls: ['./whats-app-button.component.css']
})
export class WhatsAppButtonComponent implements OnInit {



  constructor(public _cs: CommonService, public _GsDa: GoogleSheetDataAccessService) { }

  ngOnInit(): void {

  }

}
