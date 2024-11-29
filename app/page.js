import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
      <main className="flex-auto py-16">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
