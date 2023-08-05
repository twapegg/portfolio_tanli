import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="px-2">
      <Hero />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
