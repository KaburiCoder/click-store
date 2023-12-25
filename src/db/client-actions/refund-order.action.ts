"use server";
import { numericStringRegex } from "@/lib/utils/regex";
import { getCancelUrl, getTossPaymentsHeaders } from "@/lib/utils/toss-pg.util";
import { string, z } from "zod";
import db from "../db";
import { cancelPayment } from "../services/payment.service";
import { resultWrapper } from "@/lib/utils/callback.util";

const schema = z.object({
  paymentId: z.number(),
  paymentKey: z.string(),
  cancelAmount: z.number(),
  cancelReason: z.string(),
  bank: z.string().min(1, { message: "은행을 선택하세요." }),
  accountNumber: z.string().regex(numericStringRegex, {
    message: "계좌번호는 숫자로만 입력해주세요.",
  }),
  holderName: z.string().min(1, { message: "예금주를 입력해주세요." }),
});

interface Result {
  errors?: {
    paymentId?: string[];
    cancelReason?: string[];
    bank?: string[];
    accountNumber?: string[];
    holderName?: string[];
    _errorMessage?: string;
  };
}
export async function refundPaymentAction(
  args: z.infer<typeof schema>,
): Promise<Result> {
  const result = schema.safeParse(args);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const {
    paymentId,
    paymentKey,
    cancelReason,
    cancelAmount,
    bank,
    accountNumber,
    holderName,
  } = result.data;

  const url = getCancelUrl(paymentKey);
  const headers = getTossPaymentsHeaders();
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      cancelReason,
      cancelAmount,
      refundReceiveAccount: {
        bank,
        accountNumber,
        holderName,
      },
    }),
  });

  const data = await response.json();

  if (data.message) {
    return {
      errors: { _errorMessage: data.message },
    };
  }

  if (data?.status === "CANCELED") {
    const result = await resultWrapper(async () => {
      return await db.paymentRefund.create({
        data: {
          paymentId,
          accountNumber,
          bank,
          holderName,
          amount: cancelAmount,
          reason: cancelReason,
        },
      });
    });
    if (result.errorMessage) {
      return {
        errors: { _errorMessage: result.errorMessage },
      };
    }
    // paymentRefund 저장
  }

  {
    const result = await resultWrapper(
      async () => await cancelPayment(paymentId),
    );
    if (result.errorMessage) {
      return {
        errors: { _errorMessage: result.errorMessage },
      };
    }
  }

  return {};
}
