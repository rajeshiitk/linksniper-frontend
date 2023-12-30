import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Testimonials from "@/components/testimonials/Testimonials";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/Hero";
import Content from "@/components/content/Content";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Services />
      <Pricing />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
