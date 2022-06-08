import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items-filter',
  templateUrl: './items-filter.component.html',
  styleUrls: ['./items-filter.component.sass']
})
export class ItemsFilterComponent {

  @Input() filters: Array<string> | null = null;

}
