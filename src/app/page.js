import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlavorShowcase from "./components/FlavorShowcase";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppCTA from "./components/WhatsAppCTA";
// import ProductShowcase from "./components/ProductShowcase";

export default function Home() {
  return (
    <div className=" min-h-screen">
      
     <Navbar />
     <Hero />
     <FlavorShowcase />
     <AboutSection />
     <WhatsAppCTA />
     <GallerySection />
     <ContactSection/>
     <Footer />
     {/* <ProcessSection /> */}
     {/* <ProductShowcase /> */}
    </div>
  );
}
