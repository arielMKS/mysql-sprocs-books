import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };

  // make ajax request to get a book
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <strong>{this.state.book.title}</strong> by:{" "}
        <span>{this.state.book.author}</span>
        <div>{this.state.book.synopsis}</div>
        <button onClick={() => this.deleteBook(this.state.book.bookid)}>
          Delete Book
        </button>
        <button onClick={() => this.props.history.push("/")}>Cancel</button>
      </div>
    );
  }
}

export default Detail;
