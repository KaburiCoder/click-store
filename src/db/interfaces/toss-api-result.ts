export interface TossApiResult {
  mId: string;
  lastTransactionKey: string;
  paymentKey: string;
  orderId: string;
  orderName: string;
  taxExemptionAmount: number;
  status: string;
  requestedAt: string;
  approvedAt: string;
  useEscrow: boolean;
  cultureExpense: boolean;
  card?: TossApiCard;
  virtualAccount?: number; // You may need to specify the type if applicable
  transfer?: any; // You may need to specify the type if applicable
  mobilePhone?: string; // You may need to specify the type if applicable
  giftCertificate?: any; // You may need to specify the type if applicable
  cashReceipt?: any; // You may need to specify the type if applicable
  cashReceipts?: any[]; // You may need to specify the type if applicable
  discount?: any; // You may need to specify the type if applicable
  cancels?: Cancel[];
  secret?: any; // You may need to specify the type if applicable
  type: string;
  easyPay?: any; // You may need to specify the type if applicable
  country: string;
  failure?: any; // You may need to specify the type if applicable
  isPartialCancelable: boolean;
  receipt: Receipt;
  checkout: Checkout;
  currency: string;
  totalAmount: number;
  balanceAmount: number;
  suppliedAmount: number;
  vat: number;
  taxFreeAmount: number;
  method: string;
  version: string;

  code?: string;
  message?: string;
}

export interface TossApiCard {
  issuerCode: string;
  acquirerCode: string;
  number: string;
  installmentPlanMonths: number;
  isInterestFree: boolean;
  interestPayer: any; // You may need to specify the type if applicable
  approveNo: string;
  useCardPoint: boolean;
  cardType: string;
  ownerType: string;
  acquireStatus: string;
  amount: number;
}

interface Cancel {
  transactionKey: string;
  cancelReason: string;
  taxExemptionAmount: number;
  canceledAt: string;
  easyPayDiscountAmount: number;
  receiptKey: any; // You may need to specify the type if applicable
  cancelAmount: number;
  taxFreeAmount: number;
  refundableAmount: number;
}

interface Receipt {
  url: string;
}

interface Checkout {
  url: string;
}
