// import Sample from "@/components/sample";

import AngelDonor from "@/components/home/AngelDonor";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";
import TermsBar from "@/components/home/TermsBar";

export default function Home(){
  return (
    <div className="bg-white">
      <Header/>
      <Hero/>
      <Steps/>
      <AngelDonor/>
      <Footer/>
      <TermsBar/>
      {/* <Sample/> */}
    </div>
  )
}