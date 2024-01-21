import React, { useState } from "react";
import '../styles/Gift.css';
import { gift} from "../assets/assets";
import Items from "./items";

const Gift = ({sender}) => {
    const [bar, setBar] = useState(false);
    const [purchase, setPurchase] = useState(false);

    const handleOperation = () => {
        setBar(!bar);
    }
    return (
        <div className="Gift">
            {
                bar ?
                    <Items sender={sender} purchase={purchase} setPurchase={setPurchase} handleOperation={handleOperation} /> :
                <button className="bt" onClick={handleOperation}>
                    <img src={gift} alt="gift" className="giftbox"/>
                    <div>Click Here</div>
                </button>
                    
            }
        </div>
    )
}

export default Gift;