import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PriceSearch from "@/components/PriceSearch";
import Article from "@/components/Article";
import Faq from "@/components/Faq";
import QuoteCta from "@/components/QuoteCta";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import Schema from "@/components/Schema";

export default function HomePage() {
  return (
    <>
      <Schema />
      <Header />
      <main>
        <Hero />
        <PriceSearch />
        <Article />
        <Faq />
        <QuoteCta />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
