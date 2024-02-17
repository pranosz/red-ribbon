import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () =>
      import('products/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: WelcomeComponent,
  },
];
