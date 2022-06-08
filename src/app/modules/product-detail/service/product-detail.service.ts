import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBuilder } from 'src/app/core/helpers/url-builder.helpers';
import { ProductDetailResponse } from 'src/app/core/entities/common.entity';
import { ENDPOINT_GET_PRODUCT_DETAIL } from 'src/app/core/constants/product-detail.contstants';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailService {
  constructor(private http: HttpClient) {}

  public getProductDetail(id: string): Observable<ProductDetailResponse> {
    return this.http.get<ProductDetailResponse>(
      urlBuilder(ENDPOINT_GET_PRODUCT_DETAIL.replace(':id', id))
    );
  }
}
