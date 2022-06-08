import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SearchBoxModule } from '../search-box/search-box.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ItemsFilterComponent } from './components/items-filter/items-filter.component';


@NgModule({
  declarations: [
    SearchResultComponent,
    ProductCardComponent,
    ItemsFilterComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SearchBoxModule,
  ]
})
export class SearchResultModule { }
