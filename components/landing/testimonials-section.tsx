import { TestimonialsBlock } from "@/components/testimonials-scroll";
import { testimonials } from "@/config/testimonials";

export function TestimonialsSection() {
  return (
    <TestimonialsBlock
      title="Trusted by developers worldwide"
      description="Join thousands of developers who are already building the future with our AI platform"
      testimonials={testimonials}
    />
  );
}
