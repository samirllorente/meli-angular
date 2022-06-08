import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, TranslateModule],
})
export class ProductDetailModule {}
