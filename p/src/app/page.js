import Image from "next/image";
import About from "./Components/About/page";
import Homee from "./Components/Home/page";
import Imagee from "./Components/ImageSlide/page";
import Project from "./Components/Projects/page";
import Contac from "./Components/Contact/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <Homee />
      <About />
      <Imagee />
      <Project />
      <Contac />
    </main>
  );
}
