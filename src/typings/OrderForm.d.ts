import { Product } from './Product';

export interface OrderForm {
  items: OrderFormItem[];
  subTotal?: number;
}

export interface OrderFormItem extends Product {
  quantity: number;
}
