import { useEffect } from "react";
import { useState } from "react";
import WhyUs from "./WhyUs";
import OurVision from "./OurVision";

const About = () => {

  const [whyUs, setWhyUs] = useState([])

  useEffect(() => {

    fetch('whyUs.json')
      .then(res => res.json())
      .then(data => setWhyUs(data))

  }, [])

  return (
    <div className="">
      
    <h1 className="mt-10 text-center text-4xl text-primary">Why Us</h1>
    <h1 className="text-center mt-2 w-1/2 mx-auto">From Wedding Functions to Birthday Parties or Corporate Events to Musical Functions, We offer full range of Events Management Services that scale to your needs & budget.</h1>

    <div className="mt-5 mb-5 flex-col flex md:flex-row items-center justify-center max-w-7xl mx-auto">

      {whyUs.map((data,index) => <WhyUs key={index} data={data}></WhyUs>)}

    </div>

    <div className="max-w-7xl mx-auto mt-10 mb-5">
      <OurVision></OurVision>
    </div>

    </div>
  );
};

export default About;
