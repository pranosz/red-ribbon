import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      console.log("checkCredentials true");
      this.isUserLoggedIn.next(true);
    }
  }
  
  logout() {
    console.log("logout false");
    this.isUserLoggedIn.next(false);
  }
}
