import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/core/entities/product.entity';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
