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
        console.log("RESULTS", res);
        this.setState({ books: res.data, title: "", author: "", synopsis: "" });
      })
      .catch(err => {
        console.log("Error on client", err);
      });
  };

  render() {
    console.log("BOOKS STATE", this.state);

    if (this.state.books.length > 0) {
      return (
        <List>
          {this.state.books.map(book => (
            <ListItem key={book.bookid}>
              <div>
                <span style={{ color: "blue" }}>{book.title}</span>{" "}
                <button
                  onClick={() =>
                    this.props.history.push("/book/" + book.bookid)
                  }
                >
                  Book Details
                </button>
              </div>
            </ListItem>
          ))}
          <button onClick={() => this.props.history.push("/addbook")}>
            Add Book
          </button>
        </List>
      );
    } else {
      return (
        <List>
          <h1>Uh oh, no boooks found in database...</h1>
          <button onClick={() => this.props.history.push("/addbook")}>
            Add Book
          </button>
        </List>
      );
    }
  }
}

export default Books;
