import AboutUs from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Price from "@/components/price/price";
import Rooms from "@/components/rooms/rooms";
import Services from "@/components/services/services";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Rooms />
      <Testimonials />
      <Price />
      <Contacts />
      <Footer />
    </>
  );
}
