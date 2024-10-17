import PaymentStatus from "@/components/cart/PaymentStatus";

export default async function VerifyPaymentPage({ searchParams }) {
  return (
    <div className="mt-20 gap-5 flex flex-col items-center justify-center">
      <PaymentStatus param={searchParams} />
    </div>
  );
}
