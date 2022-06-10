import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PRODUCT_DETAIL_FEATURE_KEY } from 'src/app/core/constants/product-detail.contstants';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';

export const getproductDetailState =
  createFeatureSelector<ProductDetailResponse>(PRODUCT_DETAIL_FEATURE_KEY);

export const getProductDetailSelector = createSelector(
  getproductDetailState,
  (state: ProductDetailResponse) => state.item
);

export const getCategoriesSelector = createSelector(
  getproductDetailState,
  (state: ProductDetailResponse) => state.categories
);
