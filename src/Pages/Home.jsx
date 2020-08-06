import React from "react";
import Header from "../Components/Header/Header";
import InfoCard from "../Components/InfoCard/InfoCard";
import Card from "../Components/GroupCard/Card";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <InfoCard />
      <Card />
      <Footer title="Copyright @ 2020 Dewe Tour - Zainal Abidin - NIS. All Rights reserved" />
    </div>
  );
}

export default Home;
