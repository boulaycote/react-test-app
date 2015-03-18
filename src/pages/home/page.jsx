import React from "react";
import { getData } from "../../common/request";

import SampleComponent from "../../common/sample_component";


let HomePage = React.createClass({
  statics: {
    fetchData(params) {
      return getData("/home");
    }
  },

  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
  },

  render() {
    let { title } = this.props.data.home;

    return (
      <div id="home-page">
        <SampleComponent message={title} />
      </div>
    );
  }
});


export default HomePage;