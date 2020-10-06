import React from "react";
import { useParams } from "react-router-dom";

export default function Bird(props) {
  const params = useParams();
  console.log(props.birds.find((bird) => bird.name === params.name));
  console.log(params.name);
  const birds = props.birds.find((bird) => bird.name === params.name);

  if (!birds) {
    return <h3>Loading...</h3>;
  }
  console.log(props.birds.name);
  return (
    <div className="indiv-bird-cont">
      <div className="bird-img-container">
        <img src={birds.image} alt={birds.name} />
      </div>
      <div className="bird-info-container">
        <h1>{birds.name}</h1>
        <h4>({birds.genus})</h4>
        <h5>Conservation Status</h5>
        <p>{birds.conservationStatus}</p>
      </div>
    </div>
  );
}
