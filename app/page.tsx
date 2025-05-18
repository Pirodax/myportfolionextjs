import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
// import Image from "next/image";
import "./globals.css";
// import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Rencentprojects from "@/components/Rencentprojects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
// import MyApproach from "@/components/MyApproach";
import Flooter from "@/components/Footer";
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip no-caret">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Rencentprojects/>
        <Clients/>
        <Experiences/>
        {/* <MyApproach/> */}
        <Flooter/>
      </div>
    </main>
  );
}