import { Action, createReducer, on } from '@ngrx/store';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';
import {
  DATA_CLEAN,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from './product-detail.action';

export const initialState: ProductDetailResponse = {
  author: {
    name: '',
    lastname: '',
  },
  categories: [],
  item: null,
};

export const productDetailReducer = createReducer(
  initialState,
  on(
    GET_PRODUCT_DETAIL_SUCCESS,
    (state: ProductDetailResponse, { data }: any) => {
      return data;
    }
  ),
  on(GET_PRODUCT_DETAIL_FAIL, (state: ProductDetailResponse) => state),
  on(DATA_CLEAN, (state: ProductDetailResponse) => {
    return {
      ...state,
      item: null,
    };
  })
);

export function reducer(
  state: ProductDetailResponse | undefined,
  action: Action
) {
  return productDetailReducer(state, action);
}
