import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
      <p>{props.id}</p>                 {/*23/46 React  */}
        <h2 className="name">{props.name}</h2>

        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
        <Avatar img={props.img} />
        
      </div>
      <div className="bottom">
      <Detail 
      detailInfo={props.tel} />
      <Detail 
      detailInfo={props.email} />


        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
