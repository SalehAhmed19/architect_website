import React from "react";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import BusinessInnovation from "../Components/BusinessInnovation";
import Focus from "../Components/Focus";
import Innovation from "../Components/Innovation";
import OurMission from "../Components/OurMission";
import SimpleInfo from "../Components/SimpleInfo";
import Strategies from "../Components/Strategies";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <div id="home">
      <SimpleInfo />
      <Banner />
      <OurMission />
      <Innovation />
      <Strategies />
      <Focus />
      <BusinessInnovation />
      <Testimonials />
      <Brands />
    </div>
  );
};

export default Home;
// factory, tank, tool,
