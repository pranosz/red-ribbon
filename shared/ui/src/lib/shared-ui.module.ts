import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ButtonComponent, MenuCardComponent],
  exports: [ButtonComponent, MenuCardComponent],
})
export class SharedUiModule {}
