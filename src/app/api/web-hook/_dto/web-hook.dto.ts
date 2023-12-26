export interface WebHookDto {
  createdAt: Date;
  secret: string;
  orderId: string;
  status: string;
  transactionKey: string;
}
