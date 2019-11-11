import React, { Component } from "react";
import API from "../../utils/API";

class AddBook extends Component {
  state = {
    title: "Title 1",
    author: "Author 1",
    synopsis: "Something about Title 1"
  };

  handleChange = evt => {
    const val = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: val
    });
  };

  handleSubmit = () => {
    const book = {
      title: this.state.title,
      author: this.state.author,
      synopsis: this.state.synopsis
    };

    API.saveBook(book)
      .then(res => {
        console.log(res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        Title:
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />{" "}
        <br></br>
        Author:
        <input
          type="text"
          name="author"
          value={this.state.author}
          onChange={this.handleChange}
        />
        <br></br>
        Synopsis:
        <input
          type="text"
          name="synopsis"
          value={this.state.synopsis}
          onChange={this.handleChange}
        />
        <br></br>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={() => this.props.history.push("/")}>Cancel</button>
      </div>
    );
  }
}
export default AddBook;
