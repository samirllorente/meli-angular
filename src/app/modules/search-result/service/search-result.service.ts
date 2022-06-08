import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBuilder } from 'src/app/core/helpers/url-builder.helpers';
import { SearchResponse } from 'src/app/core/entities/common.entity';
import { ENDPOINT_GET_PRODUCT_LIST } from 'src/app/core/constants/search-result.constants';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  constructor(private http: HttpClient) {}

  public getProductList(searchText: string): Observable<SearchResponse> {
    const params = new HttpParams().append('q', searchText);
    return this.http.get<SearchResponse>(
      urlBuilder(ENDPOINT_GET_PRODUCT_LIST),
      { params }
    );
  }
}
