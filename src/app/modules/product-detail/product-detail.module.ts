import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { ContentLoaderModule } from '@ngneat/content-loader';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [ProductDetailComponent, LoaderComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    TranslateModule,
    ContentLoaderModule,
  ],
})
export class ProductDetailModule {}
