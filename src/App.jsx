import React,{useEffect, useState} from "react";
import './styles/App.css'
import { party,ballons } from "./assets/assets";
import Gift from "./components/gift";
import { NameFind } from "./utils/api";
const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const text = await NameFind();
        setName(text);
      } catch (err) {
      }
    };

    fetchData();
  }, []);

  return (
    name === '' ?
      <></> :
    <div className="App">
      <img src={party} alt="birthday" className="party" />
      <div className="wish__section">
        <img src={ballons} alt="ballons" className="ballons"/>
        <span className="wish">
          <h2>Happy Birthday {name}!🎉🎂</h2>
          Wishing you a fantastic day filled with joy, laughter, and all the good things life has to offer. May this year bring you success in your studies and beyond. I hope your special day is surrounded by the warmth of loved ones and the excitement of new experiences. Cheers to another year of growth, learning, and making lasting memories. Have an amazing celebration, and here's to crossing paths and creating more memories in the future! 🥳🎈
        </span> 
        <img src={ballons} alt="ballons" className="ballons" />
      </div>
      <Gift sender={name}/>
    </div>
  )
}

export default App;