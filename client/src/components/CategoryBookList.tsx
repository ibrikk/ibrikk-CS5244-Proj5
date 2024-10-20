import React from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import Card from "./Card";
import CategoryNavBar from "./CategoryNavBar";
import { useParams } from "react-router-dom";
import { Book, CategoryMock } from "../types";

interface CategoryPageProps {
  mockData: CategoryMock[];
  toggleSignIn: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  mockData,
  toggleSignIn,
}) => {
  const { categoryName } = useParams<{ categoryName: string }>();

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

  const displayName = getDisplayName(categoryName || "");

  const category = mockData.filter(
    (item: CategoryMock) => item.category === displayName
  );

  return (
    <>
      <CategoryNavBar toggleSignIn={toggleSignIn} />
      {category.length === 0 ? (
        <div className="not-found">
          <p>No books found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-full">
          <div className="cards-container grid grid-full">
            {category[0].books.map((book: Book) => (
              <Card key={book.id} book={book} isHomePage={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
