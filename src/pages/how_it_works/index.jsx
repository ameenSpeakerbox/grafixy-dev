import React from "react";
import EnablingCollaboration from "../../components/how_it_works/EnablingCollaboration";
import HeroSection from "../../components/how_it_works/HeroSection";
import ManageWithTrello from "../../components/how_it_works/ManageWithTrello";
import ShortestTurnaround from "../../components/how_it_works/ShortestTurnaround";
import YourTeam from "../../components/how_it_works/YourTeam";
import Layout from "../../components/layout/layout";

const index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-[#1F014E] to-[#6E3CBC] grid place-content-center">
        <HeroSection />
        <ManageWithTrello />
        <EnablingCollaboration />
        <YourTeam />
        <ShortestTurnaround />
      </div>
    </Layout>
  );
};

export default index;
