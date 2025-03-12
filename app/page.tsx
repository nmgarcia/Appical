import HeroSection from "@/components/home/hero-section";
import FeaturedCategories from "@/components/home/featured-categories";
import PopularProducts from "@/components/home/popular-products";
import FeaturedCourses from "@/components/home/featured-courses";
import ProcessSteps from "@/components/home/process-steps";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <FeaturedCategories /> */}
      <PopularProducts />
      {/* <FeaturedCourses /> */}
      <ProcessSteps />
      {/* <Testimonials /> */}
    </div>
  );
}
