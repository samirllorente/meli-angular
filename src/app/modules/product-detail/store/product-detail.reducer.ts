import { Action, createReducer, on } from '@ngrx/store';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';
import {
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from './product-detail.action';

export const initialState: ProductDetailResponse = {
  author: {
    name: '',
    lastname: '',
  },
  item: null,
};

export const productDetailReducer = createReducer(
  initialState,
  on(GET_PRODUCT_DETAIL_SUCCESS, (state: ProductDetailResponse, { data }: any) => {
    return data;
  }),
  on(GET_PRODUCT_DETAIL_FAIL, (state) => state)
);

export function reducer(state: ProductDetailResponse | undefined, action: Action) {
  return productDetailReducer(state, action);
}
