import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extension-card',
  templateUrl: './extension-card.component.html',
  styleUrls: ['./extension-card.component.scss']
})
export class ExtensionCardComponent {

  @Input({required: true})
  logoSrc!: string;

  @Input({required: true})
  browserName!: string;

  @Input({required: true})
  minVersion!: string;

}
