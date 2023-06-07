import React from "react";
import MainSection from "./MainSection";
import Settings from "./Settings/inex";
import SocialMedia from "./SocialMedia";

import TopSection from "./TopSection";

const HomePage = () => {
  return (
    <>
      <TopSection />
      <SocialMedia />
      <MainSection />
      <Settings />
    </>
  );
};

export default HomePage;
