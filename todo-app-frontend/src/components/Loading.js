import React from "react";

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loader">
          <img className="loader__img" src="/img/loader.gif" alt="loading data"/>
      </div>
    );
  }
}