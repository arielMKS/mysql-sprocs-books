module.exports = function(sequelize, DataTypes) {
  let Book = sequelize.define("book", {
    bookId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Book.sync();
  return Book;
};
