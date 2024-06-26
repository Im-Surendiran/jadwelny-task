import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutPage";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HomePage/>
        <AboutSection />
        </div>
      <Footer />
    </main>
  );
}
