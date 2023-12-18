import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Pricing from "@/components/pricing/Pricing";
import Image from "next/image";
import Testimonials from "@/components/testimonials/Testimonials";
import Services from "@/components/services/Services";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      {/* <Testimonials /> */}
      <Footer />
    </>
  );
}
