import React from "react";
import { getData } from "../../common/request";

import SampleComponent from "../../common/sample_component";


let LandingPage = React.createClass({
  statics: {
    fetchData(params) {
      return getData("/landing");
    }
  },

  componentWillMount() {
    console.log("[LandingPage] will mount with server response: ", this.props.data.landing);
  },

  render() {
    let { title } = this.props.data.landing;

    return (
      <div id="landing-page">
        <SampleComponent message={title} />
      </div>
    );
  }
});


export default LandingPage;