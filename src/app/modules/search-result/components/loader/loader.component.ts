import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class LoaderComponent {
  @Input() show: boolean = false;
  public data: Array<null> = new Array(10).fill(null);
}
