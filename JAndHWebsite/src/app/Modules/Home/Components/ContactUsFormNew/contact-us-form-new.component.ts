import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { GoogleSheetDataAccessService } from 'src/app/Services/GoogleSheetDataAccess/google-sheet-data-access.service';

@Component({
  selector: 'app-contact-us-form-new',
  templateUrl: './contact-us-form-new.component.html',
  styleUrls: ['./contact-us-form-new.component.css']
})
export class ContactUsFormNewComponent implements OnInit {

  validateForm!: UntypedFormGroup;
  
  constructor(public _cs: CommonService,  public _GsDa:GoogleSheetDataAccessService, private fb: UntypedFormBuilder) { }

  mainData:any = {};
  footerData:any = {};
  apiData:any = {};

  ngOnInit(): void {
    this._GsDa.getMainData().subscribe((response:any) => {
      this.mainData = response.data[0];
    });

    this._GsDa.getFooter().subscribe((res:any) => {
      this.footerData = res.data[0];
    });

    this.validateForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      phoneNumber: ["", []],
      message: ["", [Validators.required]]
    });
  }

  submitForm(){
    if (this.validateForm.valid) {
      this._cs.ShowLoader();
      this._GsDa.getUserData().subscribe((response:any) => {
        this.apiData = response;
        this.apiData.method = "POST";
        this.apiData.Action = "CONTACTUS";
        this.apiData.FullName = this.validateForm.value['name'];
        this.apiData.Email = this.validateForm.value['email'];
        this.apiData.CompanyName = "";
        this.apiData.PhoneNumber = this.validateForm.value['phoneNumber'];
        this.apiData.Country = "";
        this.apiData.Message = this.validateForm.value['message'];
        this.apiData.ProductServiceCode = "";
        this.apiData.DateTime = this.getCurrentDateTime();
        this._GsDa.postContactUsForm(this.apiData).subscribe((res:any) => {
          if(res.status == "200"){
            this._cs.showMessage("success","Message Sent");
          }
          else{
            this._cs.showMessage("error","Message Not Sent");
          }
          this._cs.HideLoader();
        })
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getCurrentDateTime(){
    let today = new Date();
    let returnDate = "";
    returnDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return returnDate;
  }
}
