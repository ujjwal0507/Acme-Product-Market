import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {
        path:'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
    ])
  ]
})
export class ProductRoutingModule { }
