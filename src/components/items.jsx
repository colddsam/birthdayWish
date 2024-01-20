import React from "react";
import {choclate, snack, momo, coffee, book } from "../assets/assets";
import { APICall } from "../utils/api";

const Items = ({ handleOperation,purchase,setPurchase }) => {
    
    const handelPurchase = async (gift) => {
        handleOperation();
        if (!purchase) {
            await APICall(gift);
            alert("Gift t jana nilam abar dakha kor dia dabo vaiiiiiiii..........");
            setPurchase(true);
        }
        else {
            alert("Ara vaiiiii ar kotobar click korbi ?????");
        }
    }

    return (
        <>
            <button className="bt" onClick={async()=>handelPurchase('fuchka')}>
                <img src={snack} alt="gift" className="giftbox" />
                <div>fuchka</div>
            </button>
            <button className="bt" onClick={async()=>handelPurchase('chocolate')}>
                <img src={choclate} alt="gift" className="giftbox" />
                <div>chocolate</div>
            </button>
            <button className="bt" onClick={async()=>handelPurchase('momo')}>
                <img src={momo} alt="gift" className="giftbox" />
                <div>momo</div>
            </button>
            <button className="bt" onClick={async()=>handelPurchase('coffee')}>
                <img src={coffee} alt="gift" className="giftbox" />
                <div>coffee</div>
            </button>
            <button  className="bt" onClick={async()=>handelPurchase('book')}>
                <img src={book} alt="gift" className="giftbox" />
                <div>book</div>
            </button>
        </>
    )
}

export default Items;