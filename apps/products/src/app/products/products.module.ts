import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ProductsComponent } from './ui/products.component';
import { ProductsApiService } from './services/products-api.service';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  exports: [ProductsComponent],
  providers: [ProductsApiService]
})
export class ProductsModule { }
