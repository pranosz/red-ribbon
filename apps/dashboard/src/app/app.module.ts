import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { UserService } from '@red-ribbon/shared/data-access-user';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomeModule } from './welcome/welcome.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    WelcomeModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
