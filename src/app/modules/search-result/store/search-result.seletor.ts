import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_LIST_FEATURE_KEY } from 'src/app/core/constants/search-result.constants';
import { SearchResponse } from 'src/app/core/entities/common.entity';

export const getproductListState = createFeatureSelector<SearchResponse>(
  PRODUCT_LIST_FEATURE_KEY
);

export const getProductListSelector = createSelector(
    getproductListState,
  (state: SearchResponse) => state.items
);

export const getCategoriesSelector = createSelector(
  getproductListState,
(state: SearchResponse) => state.categories
);

