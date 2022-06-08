import { Action, createReducer, on } from '@ngrx/store';
import { SearchResponse } from 'src/app/core/entities/common.entity';
import {
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_SUCCESS,
} from './search-result.action';

export const initialState: SearchResponse = {
  author: {
    name: '',
    lastname: '',
  },
  categories: [],
  items: [],
};

export const searchResultReducer = createReducer(
  initialState,
  on(GET_PRODUCT_LIST_SUCCESS, (state: SearchResponse, { data }: any) => {
    return data;
  }),
  on(GET_PRODUCT_LIST_FAIL, (state) => state)
);

export function reducer(state: SearchResponse | undefined, action: Action) {
  return searchResultReducer(state, action);
}
