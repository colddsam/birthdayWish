import React from "react";
import './styles/App.css'
import { party,ballons } from "./assets/assets";
import Gift from "./components/gift";
const App = () => {
  return (
    <div className="App">
      <img src={party} alt="birthday" className="party" />
      <div className="wish__section">
        <img src={ballons} alt="ballons" className="ballons"/>
        <span className="wish">
          <h2>Happy Birthday Susmita!🎉🎂</h2>
          Wishing you a fantastic day filled with joy, laughter, and all the good things life has to offer. May this year bring you success in your studies and beyond. I hope your special day is surrounded by the warmth of loved ones and the excitement of new experiences. Cheers to another year of growth, learning, and making lasting memories. Have an amazing celebration, and here's to crossing paths and creating more memories in the future! 🥳🎈
        </span> 
        <img src={ballons} alt="ballons" className="ballons" />
      </div>
      <Gift/>
    </div>
  )
}

export default App;