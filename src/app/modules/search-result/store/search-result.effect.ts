import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import { SearchResponse } from 'src/app/core/entities/common.entity';
import { SearchResultService } from '../service/search-result.service';
import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_SUCCESS,
} from './search-result.action';

@Injectable()
export class SearchResultEffect {
  constructor(
    private actions$: Actions,
    private searchResultService: SearchResultService
  ) {}

  public getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_PRODUCT_LIST),
      exhaustMap(({ searchText }) =>
        this.searchResultService
          .getProductList(searchText)
          .pipe(
            map(this.resolveGetProductListSuccess as any),
            catchError(this.resolveGetProductListFailure)
          )
      )
    )
  );

  private resolveGetProductListFailure = (): Observable<any> =>
    of(GET_PRODUCT_LIST_FAIL());

  private resolveGetProductListSuccess = (data: SearchResponse): any =>
    data ? GET_PRODUCT_LIST_SUCCESS({ data }) : GET_PRODUCT_LIST_FAIL();
}
