import { TestBed } from '@angular/core/testing';

import { ProductDetailService } from './product-detail.service';

describe('SearchResultService', () => {
  let service: ProductDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
