const router = require("express").Router();
// const db = require("../../models");

const bookService = require("../services/book.service");

module.exports = {
  // GET ALL
  getAll: function(req, res) {
    const { author, title, synopsis } = req.body;
    bookService
      .getAll()
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  // GET BY ID
  getById: function(req, res) {
    const { id } = req.params;
    bookService
      .getById(id)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  // POST
  post: function(req, res) {
    const { author, title, synopsis } = req.body;
    bookService
      .post(author, title, synopsis)
      .then(results => {
        res.status(200).json(results);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  // DELETE
  del: function(req, res) {
    const { id } = req.params;
    bookService
      .del(id)
      .then(results => {
        res.status(201).json(results);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  // UPDATE
  update: function(req, res) {
    const { bookid, author, title, synopsis } = req.body;
    bookService
      .update(bookid, author, title, synopsis)
      .then(results => {
        res.status(201).json(results);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};
