import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/core/entities/product.entity';
import { DATA_CLEAN, GET_PRODUCT_DETAIL } from './product-detail.action';
import {
  getCategoriesSelector,
  getProductDetailSelector,
} from './product-detail.seletor';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailFacade {
  constructor(private store: Store<any>) {}

  public categories$: Observable<Array<string>> = this.store.select(
    getCategoriesSelector
  );

  public productDetail$: Observable<ProductItem | null> = this.store.select(
    getProductDetailSelector
  );

  public getProducDetail(id: string): void {
    this.store.dispatch(GET_PRODUCT_DETAIL({ id }));
  }

  public cleanData(): void {
    this.store.dispatch(DATA_CLEAN());
  }
}
