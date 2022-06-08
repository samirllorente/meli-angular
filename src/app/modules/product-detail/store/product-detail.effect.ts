import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, Observable, of } from 'rxjs';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';
import { ProductDetailService } from '../service/product-detail.service';
import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from './product-detail.action';

@Injectable()
export class ProductDetailEffect {
  constructor(
    private actions$: Actions,
    private productDetailService: ProductDetailService
  ) {}

  public getProductList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_PRODUCT_DETAIL),
      exhaustMap(({ id }) =>
        this.productDetailService
          .getProductDetail(id)
          .pipe(
            map(this.resolveGetProductDetailtSuccess as any),
            catchError(this.resolveGetProductDetailtFailure)
          )
      )
    )
  );

  private resolveGetProductDetailtFailure = (): Observable<any> =>
    of(GET_PRODUCT_DETAIL_FAIL());

  private resolveGetProductDetailtSuccess = (data: ProductDetailResponse): any =>
    data ? GET_PRODUCT_DETAIL_SUCCESS({ data }) : GET_PRODUCT_DETAIL_FAIL();
}
