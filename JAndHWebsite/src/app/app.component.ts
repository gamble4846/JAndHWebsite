import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JAndHWebsite';
  showContactUsModal = false;

  hideContactUsModal(event:any){
    if(event){
      this.showContactUsModal = false;
    }
  }

  ShowContactUsModal(){
    this.showContactUsModal = true;
  }
}
