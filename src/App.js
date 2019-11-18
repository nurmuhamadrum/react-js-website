import React, { Component } from "react";
import "./App.css";

function Clicker() {
  function handleClick(e) {
    alert("Baru Alert Doang Bangga, Blok!");
    e.preventDefault();
  }

  return (
    <a href="#" onClick={handleClick}>
      KLIK DISINI ATUH CUYYY
    </a>
  );
}

export default class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>NUR MUHAMAD RUM</h1>
        <Clicker />
      </div>
    );
  }
}
