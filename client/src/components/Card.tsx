import React from "react";
import { View } from "lucide-react";
import { Book } from "../types";
import "../assets/css/CategoryBookList.css";
import "../assets/css/Home.css";
import "../assets/css/global.css";

interface CardProps {
  isHomePage: boolean;
  book: Book;
}

const Card: React.FC<CardProps> = ({ book, isHomePage }) => {
  const { title, author, price, picture, pictureDescription, isPublic } = book;
  return (
    <div className="card">
      <div className="book-image-read-btn-container">
        <img src={picture} className="book-image" alt={pictureDescription} />
        {isPublic && (
          <button className="view-btn">
            <View className="view-icon" />
          </button>
        )}
      </div>
      <div className="year-author">
        <p className="non-break">{title}</p>
        <p className="book-author">{author}</p>
      </div>
      <div className="price-add">
        <p>${price}</p>
        {!isHomePage && (
          <button className="add-to-cart-btn">Add to cart</button>
        )}
      </div>
    </div>
  );
};

export default Card;
