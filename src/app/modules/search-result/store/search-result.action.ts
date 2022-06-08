import { createAction, props } from '@ngrx/store';
import {
  ACTION_GET_PRODUCT_LIST,
  ACTION_GET_PRODUCT_LIST_FAIL,
  ACTION_GET_PRODUCT_LIST_SUCCESS,
} from 'src/app/core/constants/search-result.constants';
import { SearchResponse } from 'src/app/core/entities/common.entity';

export const GET_PRODUCT_LIST = createAction(
  ACTION_GET_PRODUCT_LIST,
  props<{ searchText: string }>()
);
export const GET_PRODUCT_LIST_FAIL = createAction(ACTION_GET_PRODUCT_LIST_FAIL);
export const GET_PRODUCT_LIST_SUCCESS = createAction(
  ACTION_GET_PRODUCT_LIST_SUCCESS,
  props<{ data: SearchResponse }>()
);
