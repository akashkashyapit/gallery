import React, { Component } from "react";
import Axios from "axios";
import Card from "./components/Card";
import ReactPaginate from "react-paginate";

class Photogallery extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      no_of_Page: "",
      offset: 0,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (data) => {
    let selected = data;
    let offset = Math.ceil(selected * 10);

    this.setState({ offset: offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1").then(
      (res) => {
        let page = res.data.length / 10;
        this.setState({
          data: res.data,
          no_of_page: page,
        });
      }
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.data.map((el) => {
            let bor = "";
            if (el.id % 2 === 0) {
              bor = true;
            }
            return (
              <div className="col-sm col-lg-4" key={el.id}>
                <Card title={el.title} url={el.url} bord={bor} id={el.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Photogallery;
