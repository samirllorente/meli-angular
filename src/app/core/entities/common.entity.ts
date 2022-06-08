import { ProductItem, ProductItemExtended } from "./product.entity";

export interface SearchResponse {
    author: Author,
    categories: Array<string>
    items: Array<ProductItem>
}

export interface ProductDetailResponse {
    author: Author,
    item: ProductItemExtended | null
}

interface Author {
    name: string,
    lastname: string;
}