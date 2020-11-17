import { Injectable } from '@angular/core';
import  { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private productUrl = "/api/products/products.json";

    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=> console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<IProduct>{
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }

    handleError(err: HttpErrorResponse){
        let message = "";
        if(err.error instanceof ErrorEvent)
            message = `Client Error: ${err.error.message}`;
        else
            message = `Server Side error ${err.status}, message: ${err.error.message}`;        
        
        console.error(message);
        return throwError(message);
    }

    constructor(private http: HttpClient){}
}