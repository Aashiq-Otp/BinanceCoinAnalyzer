import React, { useEffect, useState } from 'react';

function DisplayBox(props) {
    
    useEffect(()=>{
        console.log(typeof(props.volumechange))
        if(props.pricechange<0){
            setPChangeClass("col mt-1  text-danger font-weight-bold")
        }
        else{
            setPChangeClass("text-success");
        }
        if(props.volumechange<0){
            setVChangeClass(" text-center text-danger font-weight-bold");
        }
        else{
            setVChangeClass("text-center text-success font-weight-bold");
        }
        if(props.vchangepercent<0){
            setVPChangeClass("text-center text-danger font-weight-bold")
        }
        else{
            setVPChangeClass("text-center text-success font-weight-bold")
        }
    },[props.pricechange,props.vchangepercent,props.volumechange])
    const [pchangeClass,setPChangeClass]=useState("text-success");
    const [vchangeClass,setVChangeClass] =useState(" text-center text-success font-weight-bold");
    const [vpchangeClass,setVPChangeClass]=useState(" text-center text-success font-weight-bold");
    return (
        <div className="row box-border p-3 align-items-center">
            <div className="col">
                  <div className="row"><div className=" col text-warning font-weight-bolder m-2 coin">  {props.coin} </div></div>
                  <div className="row"><div className="col mb-2 font-weight-bold "> Current Price : <span> {props.cprice} </span>BTC</div></div>
                  <div className="row"><div className="col mt-1 font-weight-bold"> Price change  : <span class={pchangeClass}> {props.pricechange}%</span></div></div>
            </div>
            <div className="col m-2 text-center">
                  <div className="block-title font-weight-bold">Volume Change</div>
                        <div className={vchangeClass}>{props.volumechange} BTC</div>
            </div>
            <div className="col m-2 text-center">
                  <div className="block-title font-weight-bold">Volume Change Percentage</div>
                        <div className={vpchangeClass}>{props.vchangepercent} %</div>
            </div>
            <div className="col m-2 text-center">
                  <div className="block-title font-weight-bold">Current Volume</div>
                        <div className="text-dark text-center font-weight-bold">{props.currentvolume} BTC</div>
            </div>
        </div>
    );
}

export default DisplayBox;