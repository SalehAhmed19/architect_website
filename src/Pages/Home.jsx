import React from "react";
import Banner from "../Components/Banner";
import BusinessInnovation from "../Components/BusinessInnovation";
import Focus from "../Components/Focus";
import Innovation from "../Components/Innovation";
import OurMission from "../Components/OurMission";
import SimpleInfo from "../Components/SimpleInfo";
import Strategies from "../Components/Strategies";

const Home = () => {
  return (
    <div>
      <SimpleInfo />
      <Banner />
      <OurMission />
      <Innovation />
      <Strategies />
      <Focus />
      <BusinessInnovation />
    </div>
  );
};

export default Home;
// factory, tank, tool,
