import Image from "next/image";
import Header from './Components/Header/header';
import Hero from './Components/Hero/hero';
import Footer from './Components/Footer/footer';
export default function Home() {
  return (
<div className="scroll-smooth">
<Header/>
<Hero/>
<Footer/>
</div>
  );
}
