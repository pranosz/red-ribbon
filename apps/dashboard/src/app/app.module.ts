import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { SharedUiModule } from '@red-ribbon/shared/ui';
import { UserService } from '@red-ribbon/shared/data-access-user';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    MatToolbarModule,
    WelcomeModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
