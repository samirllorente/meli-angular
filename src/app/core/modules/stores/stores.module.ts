import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductDetailEffect } from 'src/app/modules/product-detail/store/product-detail.effect';
import { SearchResultEffect } from 'src/app/modules/search-result/store/search-result.effect';

import * as productDetailStore from 'src/app/modules/product-detail/store/product-detail.reducer';
import * as searchResultStore from 'src/app/modules/search-result/store/search-result.reducer';

import { PRODUCT_LIST_FEATURE_KEY } from '../../constants/search-result.constants';
import { PRODUCT_DETAIL_FEATURE_KEY } from '../../constants/product-detail.contstants';

@NgModule({
  imports: [
    EffectsModule.forFeature([ProductDetailEffect, SearchResultEffect]),
    StoreModule.forFeature(PRODUCT_DETAIL_FEATURE_KEY, productDetailStore.reducer),
    StoreModule.forFeature(PRODUCT_LIST_FEATURE_KEY, searchResultStore.reducer),
  ],
})
export class StoresModule {}
