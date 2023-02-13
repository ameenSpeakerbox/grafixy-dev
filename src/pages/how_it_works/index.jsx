import React from "react";
import EnablingCollaboration from "../../components/how_it_works/EnablingCollaboration";
import HeroSection from "../../components/how_it_works/HeroSection";
import ManageWithTrello from "../../components/how_it_works/ManageWithTrello";
import Layout from "../../components/layout/layout";

const index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-[#1F014E] to-[#6E3CBC] grid place-content-center">
        <HeroSection />
        <ManageWithTrello />
        <EnablingCollaboration />

      </div>
    </Layout>
  );
};

export default index;
