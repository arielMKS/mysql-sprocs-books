module.exports = function(sequelize, DataTypes) {
  let Book = sequelize.define(
    "Book",
    {
      bookid: {
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
    },
    {
      timestamps: false
    }
  );
  // sync() will create all table if they don't exist in database
  Book.sync();
  return Book;
};
