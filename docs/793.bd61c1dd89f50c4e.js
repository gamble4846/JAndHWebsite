"use strict";(self.webpackChunkJAndHWebsite=self.webpackChunkJAndHWebsite||[]).push([[793],{3793:(z,l,i)=>{i.r(l),i.d(l,{ServicesModule:()=>O});var d=i(6895),s=i(5361),e=i(4650),u=i(7729),v=i(722),m=i(468),p=i(3679);const C=function(){return{"background-image":"url(https://i.pinimg.com/originals/27/3b/a6/273ba6d587afc5e853815d91db01d8df.jpg)"}};function f(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",12)(1,"div",13)(2,"div",14),e.NdJ("click",function(){const a=e.CHM(n).$implicit,y=e.oxw();return e.KtG(y.cardClicked(a))}),e._UZ(3,"div",15),e.TgZ(4,"div",16)(5,"div",17),e._uU(6),e.qZA(),e.TgZ(7,"div",18),e._uU(8),e.qZA()()()()()}if(2&t){const n=o.$implicit;e.xp6(3),e.Q6J("ngStyle",e.DdM(3,C)),e.xp6(3),e.Oqu(n.Title),e.xp6(2),e.Oqu(n["Inner Service Code"])}}const x=function(t){return{"background-image":t}};let g=(()=>{class t{constructor(n,r,c){this._cs=n,this.route=r,this._GsDa=c,this.ServiceId=null,this.CoverImage="",this.Title="",this.currentService={},this.currentInnerServices=[]}ngOnInit(){this.ServiceId=this.route.snapshot.paramMap.get("ServiceId"),null==this.ServiceId&&this._cs.changePageOnlyRoute("Home");try{this.ServiceId=Number(this.ServiceId)}catch{this._cs.changePageOnlyRoute("Home")}this.getData()}getData(){this._cs.ShowLoader();let n=0;this._GsDa.getServices().subscribe(c=>{this.currentService=c.data.find(a=>a.ServiceID==this.ServiceId),this.CoverImage=this.currentService["Secondary Image Link"],this.Title=this.currentService.Heading,n++,this.apiGettingCompleted(n,2)}),this._GsDa.getInnerServices().subscribe(c=>{this.currentInnerServices=c.data.filter(a=>a.ServiceID==this.ServiceId),n++,this.apiGettingCompleted(n,2)})}apiGettingCompleted(n,r){n>=r&&(this._cs.HideLoader(),console.log(this.currentInnerServices))}cardClicked(n){let r=document.createElement("div");r=document.getElementById("quoteSpan"),r.innerHTML=n["Inner Service Code"],localStorage.setItem("currentInnerItemCode",n["Inner Service Code"]),this._cs.ShowContactUsModal()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.v),e.Y36(s.gz),e.Y36(v.I))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-opener"]],decls:22,vars:6,consts:[[1,"openerContainer"],[1,"openerHeaderContainer",3,"ngStyle"],[1,"openerHeader"],[1,"openerBreadcrumb"],[1,"breadcrumb"],[1,"breadcrumbItem"],[1,"breadcrumbDevider"],[1,"cards-container"],[1,"cardsInnerContainer"],["nz-row",""],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","6","class","GridCol",4,"ngFor","ngForOf"],[1,"sectionContainer"],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","6",1,"GridCol"],[1,"cardContainer"],[1,"cardInnerContainer",3,"click"],[1,"cardImageContainer",3,"ngStyle"],[1,"cardDataContainer"],[1,"cardTitle"],[1,"cardSubtitle"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA()()(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5),e._uU(7,"Home"),e.qZA(),e.TgZ(8,"div",6),e._uU(9,"|"),e.qZA(),e.TgZ(10,"div",5),e._uU(11,"Services"),e.qZA(),e.TgZ(12,"div",6),e._uU(13,"|"),e.qZA(),e.TgZ(14,"div",5),e._uU(15),e.qZA()()(),e.TgZ(16,"div",7)(17,"div",8)(18,"div",9),e.YNc(19,f,9,4,"div",10),e.qZA()()(),e.TgZ(20,"div",11),e._UZ(21,"app-footer"),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngStyle",e.VKq(4,x,"url("+r.CoverImage+")")),e.xp6(2),e.hij(" ",r.Title," "),e.xp6(12),e.Oqu(r.Title),e.xp6(4),e.Q6J("ngForOf",r.currentInnerServices))},dependencies:[d.sg,d.PC,m.c,p.t3,p.SK],styles:[".openerHeaderContainer[_ngcontent-%COMP%]{position:relative;height:250px;background-repeat:no-repeat;background-size:cover;background-position:center;box-shadow:inset 0 0 0 2000px #ffffff75;display:flex;align-items:center;justify-content:center}.openerHeader[_ngcontent-%COMP%]{font-size:30px;line-height:28px;color:#032e49;font-weight:900;width:100%;max-width:1200px;margin:0 20px;text-transform:uppercase}.openerBreadcrumb[_ngcontent-%COMP%]{background:#eaf7ff;padding:13px 0;border-bottom:1px solid #e6e6e6;display:flex;align-items:center;justify-content:center}.openerBreadcrumb[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin:0 20px;font-size:12px;line-height:normal;color:gray;display:flex}.breadcrumbItem[_ngcontent-%COMP%]{padding-right:10px;cursor:pointer}.breadcrumbDevider[_ngcontent-%COMP%]{padding-right:10px}.cards-container[_ngcontent-%COMP%]{color:#032e49;display:flex;justify-content:center;align-items:center;padding:10px}.cardsInnerContainer[_ngcontent-%COMP%]{width:100%;max-width:1200px;display:block}.cardContainer[_ngcontent-%COMP%]{padding:10px}.cardInnerContainer[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.06);border-radius:5px;overflow:hidden;transition:.3s ease-in-out;cursor:pointer}.cardImageContainer[_ngcontent-%COMP%]{height:200px;width:100%;background-repeat:no-repeat;background-size:cover;background-position:center}.cardDataContainer[_ngcontent-%COMP%]{padding:30px 10px}.cardDataContainer[_ngcontent-%COMP%]   .cardTitle[_ngcontent-%COMP%]{font-weight:500;font-size:25px;white-space:nowrap;text-overflow:ellipsis;width:100%}.cardDataContainer[_ngcontent-%COMP%]   .cardSubtitle[_ngcontent-%COMP%]{font-size:13px;white-space:nowrap;text-overflow:ellipsis;width:100%;color:#00000073}.cardInnerContainer[_ngcontent-%COMP%]:hover{box-shadow:0 1px 2px -2px #00000029,0 3px 6px #0000001f,0 5px 12px 4px #00000017}"]}),t})();const S=[{path:"",component:g},{path:":ServiceId",component:g}];let I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(S),s.Bz]}),t})();var b=i(9054),M=i(1971);let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.ez,I,b.A,p.Jb,M.vh]}),t})()}}]);