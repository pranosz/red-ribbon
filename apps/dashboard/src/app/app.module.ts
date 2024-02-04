import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiModule } from '@red-ribbon/shared/ui'
import { UserService } from '@red-ribbon/shared/data-access-user';
import {MatToolbarModule} from '@angular/material/toolbar'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
