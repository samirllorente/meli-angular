import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchResultEffect } from 'src/app/modules/search-result/store/search-result.effect';

import * as searchResultDetailStore from 'src/app/modules/search-result/store/search-result.reducer';

import { PRODUCT_LIST_FEATURE_KEY } from '../../constants/search-result.constants';

@NgModule({
  imports: [
    EffectsModule.forFeature([SearchResultEffect]),
    StoreModule.forFeature(
      PRODUCT_LIST_FEATURE_KEY,
      searchResultDetailStore.reducer
    ),
  ],
})
export class StoresModule {}
