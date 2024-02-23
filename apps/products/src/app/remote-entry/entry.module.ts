import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
