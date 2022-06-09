import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from 'src/app/core/entities/product.entity';
import { ProductDetailFacade } from './store/product-detail.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public productDetail: ProductItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private productDetailFacade: ProductDetailFacade
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getProductDetail();
  }

  ngOnDestroy(): void {
    this.productDetailFacade.cleanData();
  }

  private getParams(): void {
    this.route.paramMap.subscribe((params) => {
      this.isLoading = true;
      const id = params.get('id') || '';
      this.productDetailFacade.getProducDetail(id);
    });
  }

  private getProductDetail(): void {
    this.productDetailFacade.productDetail$.subscribe((data) => {
      if (data) {
        this.productDetail = data;
        this.isLoading = false;
      }
    });
  }
}
