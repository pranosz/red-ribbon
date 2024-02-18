import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedUiModule } from '@red-ribbon/shared/ui';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    SharedUiModule
  ]
})
export class WelcomeModule { }
