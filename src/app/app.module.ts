import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  /**all the components */
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  /**External modules that may be required for angular */
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  /**startup component */
  bootstrap: [AppComponent]
})
export class AppModule { }
