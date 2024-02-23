import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ProductStatus } from '../../models/productStatus';
import { ProductsApiService } from '../services/products-api.service';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'red-ribbon-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements AfterViewInit, OnInit, OnDestroy {
  /*
  ELEMENT_DATA: Product[] = [
    {id: 1, name: 'Hydrogen', price: 1.0079, category: Category.Electronics, description: 'Something good', code: 'HK9', status: ProductStatus.Available},
    {id: 2, name: 'Potatoes', price: 2, category: Category.Food, description: 'Something good', code: 'EE9', status: ProductStatus.Withdrawn},
    {id: 3, name: 'Tomato', price: 34, category: Category.Food, description: 'Something bad', code: 'EE9', status: ProductStatus.Available},
    {id: 4, name: 'Wardrobe', price: 4, category: Category.Furniture, description: 'Something good', code: 'EE9', status: ProductStatus.Available},
    {id: 5, name: 'Car', price: 11, category: Category.Automotive, description: 'Something good', code: 'EE9', status: ProductStatus.NotAvailable},
    {id: 6, name: 'Pear', price: 90, category: Category.Food, description: 'Something good', code: 'EE9', status: ProductStatus.Available},
    {id: 7, name: 'Apple', price: 1.5, category: Category.Food, description: 'Something good', code: 'TTy', status: ProductStatus.Ordered},
  ];*/

  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>([]);
  private readonly destroy$ = new Subject<boolean>();

  constructor(private productsApiService: ProductsApiService){}

  displayedColumns: string[] = ['id', 'name', 'price', 'category','description','code','status'];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.productsApiService.getProducts().pipe(takeUntil(this.destroy$)).subscribe( data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
