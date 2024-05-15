import Title from "@/components/atoms/Title";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="py-14 bg-gradient-to-br from-blue-200 to-cyan-200">
      <div className="container space-y-8">
        <div className="flex items-center justify-center">
          <Title
            title="Testimonials"
            desc="Apa kata mereka yang sudah menggunakan jasa kami."
          />
        </div>

        <TestimonialsCarousel />
      </div>
    </section>
  );
};
export default Testimonials;
