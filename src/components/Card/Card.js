import React from "react";

const Card = props => (
   <div 
   className="card w-25 m-1 col-sm-3"
   value={props.id}
   onClick={() => props.handleClick(props.id)}
   >
   <div>
    <img className="img-fluid" alt={props.name} src={props.image} />
   </div>
   </div> 
);

export default Card;