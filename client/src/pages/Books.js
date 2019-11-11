import React from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Books extends React.Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data, title: "", author: "", synopsis: "" });
      })
      .catch(err => {
        console.log("Error on client", err);
      });
  };

  render() {
    return (
      <div>
        <List>
          {this.state.books.map(book => (
            <ListItem key={book._id}>
              <div>
                <span style={{ color: "blue" }}>{book.title}</span>{" "}
                <button
                  onClick={() => this.props.history.push("/book/" + book._id)}
                >
                  Book Details
                </button>
              </div>
            </ListItem>
          ))}
        </List>
        <button onClick={() => this.props.history.push("/addbook")}>
          Add Book
        </button>
      </div>
    );
  }
}

export default Books;
