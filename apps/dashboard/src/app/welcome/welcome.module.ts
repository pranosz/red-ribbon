import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './welcome.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class WelcomeModule { }
