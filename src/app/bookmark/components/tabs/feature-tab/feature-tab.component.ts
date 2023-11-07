import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-tab',
  templateUrl: './feature-tab.component.html',
  styleUrls: ['./feature-tab.component.scss']
})
export class FeatureTabComponent {

  @Input({required: true})
  imageSrc!: string;

  @Input({required: true})
  title!: string;

  @Input({required: true})
  description!: string;
}
