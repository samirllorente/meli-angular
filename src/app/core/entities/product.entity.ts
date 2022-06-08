export interface ProductItem {
  condition: string;
  description?: string;
  free_shipping: boolean;
  id: string;
  picture: string;
  price: Price;
  sold_quantity?: number;
  title: string;
}

export interface ProductItemExtended extends ProductItem {
  description?: string;
  sold_quantity?: number;
}

interface Price {
  amount: number;
  currency: string;
  decimals: number;
}
