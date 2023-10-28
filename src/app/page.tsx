import Footer from "@/components/Footer/Footer";
import Glimpse from "@/components/GlimpseSection/Glimse";
import Navbar from "@/components/Navbar/Navbar";
import Speakers from "@/components/Speakers/Speakers";
import Sponsors from "@/components/Sponsors/Sponsors";

export default function Home() {
  return (
    <>
      <Navbar />
      <Speakers />
      <Glimpse />
      <Sponsors />
      <Footer />
    </>
  );
}
