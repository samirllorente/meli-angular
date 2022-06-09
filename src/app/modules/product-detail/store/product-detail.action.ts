import { createAction, props } from '@ngrx/store';
import {
  ACTION_DATA_CLEAN,
  ACTION_GET_PRODUCT_DETAIL,
  ACTION_GET_PRODUCT_DETAIL_FAIL,
  ACTION_GET_PRODUCT_DETAIL_SUCCESS,
} from 'src/app/core/constants/product-detail.contstants';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';

export const GET_PRODUCT_DETAIL = createAction(
  ACTION_GET_PRODUCT_DETAIL,
  props<{ id: string }>()
);
export const GET_PRODUCT_DETAIL_FAIL = createAction(
  ACTION_GET_PRODUCT_DETAIL_FAIL
);
export const GET_PRODUCT_DETAIL_SUCCESS = createAction(
  ACTION_GET_PRODUCT_DETAIL_SUCCESS,
  props<{ data: ProductDetailResponse }>()
);
export const DATA_CLEAN = createAction(ACTION_DATA_CLEAN);
