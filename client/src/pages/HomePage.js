import React from "react";
import Layout from "../component/layout/layout";
import { RightSec } from "../component/home/RightSec";
import { LeftSec } from "../component/home/LeftSec";

function HomePage() {
  return (
    <Layout>
       <div className="container-fluid home-container pt-4">
        <LeftSec/>
        <RightSec/>
       </div>
     </Layout>
  );
}

export default HomePage;
