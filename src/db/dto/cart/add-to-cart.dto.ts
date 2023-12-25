export interface AddToCartDto {
  code: string;
  fit: boolean;
  quantity: number;

  id?: number;
  cartId?: number;
  createdDate?: Date;
  updatedDate?: Date;
}
