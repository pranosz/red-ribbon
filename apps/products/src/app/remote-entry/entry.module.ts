import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { ProductsComponent } from '../products/products.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [RemoteEntryComponent, ProductsComponent],
  imports: [
    CommonModule, 
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
