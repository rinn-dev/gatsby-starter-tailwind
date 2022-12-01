import React from "react";
import Layout from "../components/common/layout/Layout";
import Meta from "../components/common/meta/Meta";

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-4xl text-red-600 text-center my-8">
        Gatsby Tailwind Starter
      </h1>
    </Layout>
  );
};

export default HomePage;

export const Head = ({ location }) => {
  const metaData = {
    title: "Gatsby Tailwind Starter",
    description:
      "Minimal Configuration for Gatsby and Tailwind with Headless UI",
    pathname: location.pathname,
    image: "",
  };
  return <Meta meta={metaData} />;
};
