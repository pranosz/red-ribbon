import { Component, Input } from '@angular/core';

@Component({
  selector: 'red-ribbon-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css'],
})
export class MenuCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) routerLink!: string;
  @Input() subTitle?: string;
  @Input() content?: string;
}
