import React from "react";
import { Link } from "react-router-dom";

export const RightSec = () => {
  return (
    <>
<div classname="right">
  <Link  to ="" className="card" style={{width: '10rem'}}>
    <img className="card-img-top" src="/spotify.png" alt="Card image cap" />
    <div className="card-body">
      <p className="card-title">Without me</p>
    </div>
  </Link>
</div>


    </>
  );
};
