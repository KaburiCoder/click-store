export interface TossApiResult {
  mId: string;
  lastTransactionKey: string;
  paymentKey: string;
  orderId: string;
  orderName: string;
  taxExemptionAmount: number;
  status:
  | "READY"
  | "IN_PROGRESS"
  | "WAITING_FOR_DEPOSIT"
  | "DONE"
  | "CANCELED"
  | "PARTIAL_CANCELED"
  | "ABORTED"
  | "EXPIRED";
  requestedAt: string;
  approvedAt: string;
  useEscrow: boolean;
  cultureExpense: boolean;
  card?: TossApiCard;
  virtualAccount?: number; // You may need to specify the type if applicable
  transfer?: Transfer; // You may need to specify the type if applicable
  mobilePhone?: string;
  giftCertificate?: any; // You may need to specify the type if applicable
  cashReceipt?: CashReceipt;
  cashReceipts?: any[]; // You may need to specify the type if applicable
  discount?: any; // You may need to specify the type if applicable
  cancels?: Cancel[];
  secret?: any; // You may need to specify the type if applicable
  type: string;
  easyPay?: EasyPay; // You may need to specify the type if applicable
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
  method:
  | "카드"
  | "가상계좌"
  | "간편결제"
  | "휴대폰"
  | "계좌이체"
  | "문화상품권"
  | "도서문화상품권"
  | "게임문화상품권";
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

interface EasyPay {
  provider: string;
  amount: number;
  discountAmount: number;
}

interface CashReceipt {
  type: string;
  receiptKey: string;
  issueNumber: string;
  receiptUrl: string;
  amount: number;
  taxFreeAccount: number;
}

interface Transfer {
  bankCode: string;
  settlementStatus: string;
}
