import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/core/entities/product.entity';
import { GET_PRODUCT_LIST } from './search-result.action';
import { getCategoriesSelector, getProductListSelector } from './search-result.seletor';

@Injectable({
  providedIn: 'root',
})
export class SearchResultFacade {
  constructor(private store: Store<any>) {}

  public categories$: Observable<Array<string>> = this.store.select(
    getCategoriesSelector
  );
  
  public productList$: Observable<Array<ProductItem>> = this.store.select(
    getProductListSelector
  );

  public getProductList(searchText: string): void {
    this.store.dispatch(GET_PRODUCT_LIST({ searchText }));
  }
}
