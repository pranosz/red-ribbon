import { Component, Input } from '@angular/core';

@Component({
  selector: 'red-ribbon-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input() label = '';

}


