import { notFound } from 'next/navigation';
import { monthlyPricing, yearlyPricing } from "@/config/plans";
import PaymentSuccess from './PaymentSuccess';

function calculateExpiryDate(type: string): string {
  const currentDate = new Date();
  let expiryDate: Date;

  if (type === 'monthly') {
    expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  } else if (type === 'yearly') {
    expiryDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
  } else {
    throw new Error('Invalid plan type');
  }

  return expiryDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const planId = searchParams.plan_id as string;
  const type = searchParams.type as string;

  if (!planId || !type || (type !== 'monthly' && type !== 'yearly')) {
    notFound();
  }

  const pricingType = type === 'monthly' ? monthlyPricing : yearlyPricing;
  const plan = pricingType[planId as keyof typeof pricingType];

  if (!plan) {
    notFound();
  }

  const planName = planId.charAt(0).toUpperCase() + planId.slice(1);
  const features = Object.values(plan.features);
  const expiryDate = calculateExpiryDate(type);

  return <PaymentSuccess
    type={type}
    planName={planName}
    price={plan.price}
    features={features}
    expiryDate={expiryDate}
  />;
}
