import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result.component';
import { SearchBoxModule } from '../search-box/search-box.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ItemsFilterComponent } from './components/items-filter/items-filter.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderComponent } from './components/loader/loader.component';
import { ContentLoaderModule } from '@ngneat/content-loader';

@NgModule({
  declarations: [
    SearchResultComponent,
    ProductCardComponent,
    ItemsFilterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SearchBoxModule,
    TranslateModule,
    ContentLoaderModule,
  ],
})
export class SearchResultModule {}
