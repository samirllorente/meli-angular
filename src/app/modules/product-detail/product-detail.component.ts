import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductItem } from 'src/app/core/entities/product.entity';
import { ProductDetailFacade } from './store/product-detail.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass'],
})
export class ProductDetailComponent implements OnInit {
  public productDetail: ProductItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private productDetailFacade: ProductDetailFacade
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getProductDetail();
  }

  private getParams(): void {
    const id = this.route.snapshot.params['id'];
    this.productDetailFacade.getProducDetail(id);
  }

  private getProductDetail(): void {
    this.productDetailFacade.productDetail$.subscribe((data) => {
      this.productDetail = data;
    });
  }
}
