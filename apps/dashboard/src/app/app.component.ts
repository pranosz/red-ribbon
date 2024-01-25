import { Component, inject } from '@angular/core';
import { UserService } from '@red-ribbon/shared/data-access-user';

@Component({
  selector: 'red-ribbon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard';

  private userService = inject(UserService);

  isUserLogin = this.userService.isUserLoggedIn$;

}
