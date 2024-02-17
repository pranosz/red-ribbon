import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'red-ribbon-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {}
