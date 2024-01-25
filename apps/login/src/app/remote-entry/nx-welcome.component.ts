import { Component, ViewEncapsulation, inject } from '@angular/core';
import { UserService } from '@red-ribbon/shared/data-access-user';

@Component({
  selector: 'red-ribbon-nx-welcome',
  template: `
  <p>Is user login: {{isUserLogin | async}}</p>
  <button (click)="onLogin()">login</button> <button (click)="onLogout()">logout</button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  private userService = inject(UserService);

  isUserLogin = this.userService.isUserLoggedIn$;

  onLogin(): void {
    this.userService.checkCredentials('demo', 'demo');
  }

  onLogout(): void {
    this.userService.logout();
  }

}
