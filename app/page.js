// import Sample from "@/components/sample";

import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Steps from "@/components/home/Steps";

export default function Home(){
  return (
    <div className="bg-white">
      <Header/>
      <Hero/>
      <Steps/>
      {/* <Sample/> */}
    </div>
  )
}