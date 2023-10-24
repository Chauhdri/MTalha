import Hero from "@home/heroCover";
import WhyMyAbabeel from "@home/whyMyAbabeel";
import Services from "@home/services";
import TestimonialsSection from "@home/testinomials";
import Offers from "@home/offers";
import Gallery from "@home/gallery";

export default function Home() {
  return (
    <main >
      <Hero />
      <WhyMyAbabeel />
      <TestimonialsSection  />
      <Services />
      <Offers />
      <Gallery />
    </main>
  )
}
