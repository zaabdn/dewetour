import React from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import InfoCard from "../Components/InfoCard/InfoCard";
import Card from "../Components/GroupCard/Card";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Jumbotron />
      <InfoCard />
      <Card />
      <Footer title="Copyright @ 2020 Dewe Tour - Zainal Abidin - NIS. All Rights reserved" />
    </div>
  );
}

export default Home;
