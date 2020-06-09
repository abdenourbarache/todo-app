import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";


export default class Loading extends React.Component {
  render() {
    return (
      <div>
          <p>Fetching data</p>
          <ReactLoading type={"bars"} color={"white"} />
      </div>
    );
  }
}