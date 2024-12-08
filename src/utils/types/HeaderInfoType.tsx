export type HeaderInfoType = {
  title: string;
  total: number;
  currency?: string;
};

export interface Order {
  id: number;
  orderNumber: string;
  client: string;
  orderDate: string;
  store: string;
  ship: string;
  price: string;
  totalAmount: string;
  orderStatus: string;
  payStatus: string;
}
export interface AbandonedData {
  id: number;
  client: string;
  cart: string;
  store: string;
  totalAmount: string;
  orderDate: string;
}

export interface Products {
  id: number;
  orderNumber: string;
  productName: string;
  SKU: string;
  totalProducts: string;
  orderStatus: string;
}
