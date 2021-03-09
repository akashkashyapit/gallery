import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      {props.bord ? (
        <div className="card m-1 border-5 border-danger">
          <img src={props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to={`/Details?${props.id}`}>{props.title}</Link>
          </div>
        </div>
      ) : (
        <div className="card m-1">
          <img src={props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <Link to={`/Details?${props.id}`}>{props.title}</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
