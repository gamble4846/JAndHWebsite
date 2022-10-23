import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'Home'},
  {path: 'Home', loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)},
  {path: 'Products', loadChildren: () => import('./Modules/Products/products.module').then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
