import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CTA from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </>
  );
}