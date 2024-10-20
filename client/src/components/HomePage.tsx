import React from "react";
import Hero from "./Hero";
import HomeNavBar from "./HomeNavBar";
import Card from "./Card";
import { Book, Category, CategoryMock } from "../types";

import "../assets/css/global.css";
import "../assets/css/Home.css";
import "../assets/css/CategoryBookList.css";
import "../assets/css/CategoryBookListItem.css";
import "../assets/css/CategoryNav.css";
import "../assets/css/HeaderDropdown.css";

interface HomePageProps {
  mockData: CategoryMock[];
  categories: Category[];
  toggleSignIn: () => void;
}

const HomePage: React.FC<HomePageProps> = ({
  mockData,
  toggleSignIn,
  categories,
}) => {
  return (
    <>
      <HomeNavBar toggleSignIn={toggleSignIn} categories={categories} />

      <Hero />

      <section className="grid grid-full">
        <h3 className="homepage-category-name">{categories[0]?.name}</h3>
        <div className="cards-container grid grid-full">
          {/* {mockData[0].books.map((book: Book) => (
            <Card key={book.id} book={book} isHomePage={true} />
          ))} */}
        </div>

        <h3 className="homepage-category-name">{categories[1]?.name}</h3>
        <div className="cards-container grid grid-full">
          {/* {mockData[1].books.map((book: Book) => (
            <Card key={book.id} book={book} isHomePage={true} />
          ))} */}
        </div>
      </section>
    </>
  );
};

export default HomePage;
