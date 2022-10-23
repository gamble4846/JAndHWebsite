import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenerComponent } from './Components/Opener/opener.component';

const routes: Routes = [
  {path: '', component: OpenerComponent},
  {path: ':ProductId', component: OpenerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
