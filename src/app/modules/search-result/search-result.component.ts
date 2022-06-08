import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/core/entities/product.entity';
import { SearchResultFacade } from './store/search-result.facade';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export class SearchResultComponent implements OnInit {
  public searchText: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private searchResultFacade: SearchResultFacade
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchText = params['search'];
      this.searchResultFacade.getProductList(this.searchText || '');
    });
  }

  get categories$(): Observable<Array<string>> {
    return this.searchResultFacade.categories$;
  }

  get productList$(): Observable<Array<ProductItem>> {
    return this.searchResultFacade.productList$;
  }
}
