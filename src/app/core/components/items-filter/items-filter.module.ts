import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsFilterComponent } from './items-filter.component';

@NgModule({
  declarations: [ItemsFilterComponent],
  imports: [CommonModule],
  exports: [ItemsFilterComponent],
})
export class ItemsFilterModule {}
