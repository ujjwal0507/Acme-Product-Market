import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'products', component:ProductListComponent},
      {
        path:'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent
      },
    ])
  ] 
})
export class ProductModule { }
