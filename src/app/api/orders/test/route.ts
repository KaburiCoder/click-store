import { getJoinedPayments } from "@/db/services/payment.service";

export async function PATCH() {
  const payments = await getJoinedPayments();

  const filterdPayments = payments.filter((payment) => payment.virtual);

  for (const payment of filterdPayments) {
    console.log(payment.virtual?.dueDate);
  }
}
