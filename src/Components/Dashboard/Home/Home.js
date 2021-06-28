import React, { Component } from "react";
import Layout from "../../Layout/Layout";
import Cards from "./Cards";
import Graphs from "./Graphs";
import Tables from "./Tables";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Layout>
          {/* <div className="container-fluid"> */}
          <Cards />

          <Graphs />
          <Tables />
          {/* </div> */}
        </Layout>
      </>
    );
  }
}

export default Home;
