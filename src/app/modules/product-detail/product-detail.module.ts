import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { LoaderComponent } from './components/loader/loader.component';
import { ItemsFilterModule } from 'src/app/core/components/items-filter/items-filter.module';

@NgModule({
  declarations: [ProductDetailComponent, LoaderComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    TranslateModule,
    ContentLoaderModule,
    ItemsFilterModule,
  ],
})
export class ProductDetailModule {}
