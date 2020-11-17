import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = "Product Detail";
  productId: number;
  product: IProduct;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get("id"); 
    this.productService.getProduct(this.productId).subscribe({
      next:  product =>{ 
        this.product = product;
        console.log(JSON.stringify(this.product));
      }
    })
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
