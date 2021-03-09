import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Axios from "axios";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      image: "",
      id: "",
      thumbnailurl: "",
      albumId: "",
    };
  }
  componentDidMount() {
    var p = window.location.href.split("?")[1];

    Axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1").then(
      (res) => {
        res.data.map((e) => {
          if (e.id == p) {
            console.log(e);
            this.setState({
              title: e.title,
              image: e.url,
              id: e.id,
              thumbnailurl: e.thumbnailUrl,
              albumId: e.albumId,
            });
          }
        });
      }
    );
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <div class="card">
          <img src={this.state.thumbnailurl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h1 class="card-text">{this.state.title}</h1>
            <p>Album d:{this.state.albumId}</p>
            <p>ID:{this.state.id}</p>
            <Link to="/">Back</Link>
          </div>
        </div>
      
      </div>
    );
  }
}

export default Detail;
