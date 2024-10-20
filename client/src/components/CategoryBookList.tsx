import React, { useEffect } from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import Card from "./Card";
import CategoryNavBar from "./CategoryNavBar";
import { useParams } from "react-router-dom";
import { Book, BookMock, Category, CategoryMock } from "../types";
import axios from "axios";

interface CategoryPageProps {
  categories: Category[];
  toggleSignIn: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  categories,
  toggleSignIn,
}) => {
  const { categoryName } = useParams<{ categoryName: string }>();

  console.log("useParam categoryName", categoryName);

  const getDisplayName = (categoryPath: string) => {
    const categoryMap: { [key: string]: string } = {
      NewReleases: "New Releases",
      BestSellers: "Best Sellers",
      Trending: "Trending",
      OnSale: "On Sale",
      Fiction: "Fiction",
      Business: "Business",
      Romance: "Romance",
      Travel: "Travel",
      Cooking: "Cooking",
      "Action & Adventure": "Action & Adventure",
      DIY: "DIY",
    };
    return categoryMap[categoryPath] || categoryPath;
  };

  console.log("categories", categories);

  const displayName = getDisplayName(categoryName || "");

  const category = categories.filter(
    (item: Category) => item?.name === displayName
  );

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/IbrahimBookstoreReactFetch/api/categories/name/${displayName}/books`
      )
      .then((result) => {
        console.log("result", result.data);
      })
      .catch(console.error);
  }, [category]);

  return (
    <>
      <CategoryNavBar
        otherCategories={categories.slice(2)}
        toggleSignIn={toggleSignIn}
      />
      {category.length === 0 ? (
        <div className="not-found">
          <p>No books found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-full">
          <div className="cards-container grid grid-full">
            {/* {category[0].books.map((book: BookMock) => (
              <Card key={book.id} book={book} isHomePage={false} />
            ))} */}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
