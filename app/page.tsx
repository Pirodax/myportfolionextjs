import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Image from "next/image";
import "./globals.css";
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Rencentprojects from "@/components/Rencentprojects";
import { navItems } from "@/data";
import Clents from "@/components/Clents";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}        />
        <Hero />
        <Grid />
        <Rencentprojects/>
        <Clents/>
        <Experiences/>
      </div>
    </main>
  );
}