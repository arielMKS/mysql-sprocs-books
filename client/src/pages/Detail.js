import React, { Component } from "react";
import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {},
    isEditing: false
  };

  author = React.createRef();
  title = React.createRef();
  synopsis = React.createRef();

  getBook = () => {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  };

  // make ajax request to get a book
  componentDidMount() {
    this.getBook();
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  updateBook = id => {
    // do ajax by id
    // this.getBook();
    this.setState({ isEditing: true });
  };

  handleChange = e => {
    console.log("handle change");
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const bookData = {
      bookid: this.state.book.bookid,
      author: this.author.current.value,
      title: this.title.current.value,
      synopsis: this.synopsis.current.value
    };
    API.updateBook(bookData)
      .then(results => {
        // console.log("RESULTS", results);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  renderBookDetails = () => {
    if (!this.state.isEditing) {
      return (
        <div>
          <strong>{this.state.book.title}</strong> by:{" "}
          <span>{this.state.book.author}</span>
          <div>{this.state.book.synopsis}</div>
          <button onClick={() => this.updateBook(this.state.book.bookid)}>
            Update
          </button>
          <button onClick={() => this.deleteBook(this.state.book.bookid)}>
            Delete
          </button>
          <button onClick={() => this.props.history.push("/")}>Cancel</button>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.onSubmit}>
          Title:
          <input
            ref={this.title}
            type="text"
            name="title"
            defaultValue={this.state.book.title}
          ></input>
          <br></br>
          Author:
          <input
            ref={this.author}
            type="text"
            name="author"
            defaultValue={this.state.book.author}
          ></input>
          <br></br>
          Synopsis:
          <input
            ref={this.synopsis}
            type="text"
            name="synopsis"
            defaultValue={this.state.book.synopsis}
          ></input>
          <br></br>
          <button onClick={() => this.props.history.push("/")}>Cancel</button>
          <button type="submit">Submit</button>
        </form>
      );
    }
  };

  render() {
    return <div>{this.renderBookDetails()}</div>;
  }
}

export default Detail;
