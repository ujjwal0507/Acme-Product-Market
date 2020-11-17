import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';
import { timestamp } from 'rxjs/operators';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;
    private _listFilter: string;
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProduct = this.listFilter?this.performFilter(this.listFilter): this.products;
    }
    filteredProduct: IProduct[];
    products: IProduct[];

    toggleImage(): void  {
      this.showImage = !this.showImage;
    };

    performFilter(filterBy: string):IProduct[]{
      filterBy = filterBy.toLowerCase();
      return this.products.filter((product:IProduct)=> product.productName.toLowerCase().indexOf(filterBy)!==-1)
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProduct = products;
        },
        error: err => this.errorMessage = err
      });
    }

    onRatingClicked(message: string): void {
      this.pageTitle = message;
    }
    constructor(private productService: ProductService){}
}