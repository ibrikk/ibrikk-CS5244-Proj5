import React from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";

interface CategoryPageCategory {
  id: number;
  name: string;
}

interface CategoryNavBarProps {
  toggleSignIn: () => void;
}

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({ toggleSignIn }) => {
  const categoryPageCategories: CategoryPageCategory[] = [
    { id: 1, name: "Fiction" },
    { id: 2, name: "Business" },
    { id: 3, name: "Romance" },
    { id: 4, name: "Travel" },
    { id: 5, name: "Cooking" },
    { id: 6, name: "Action & Adventure" },
    { id: 7, name: "DIY" },
  ];
  const { categoryName } = useParams();

  const isActive = (category: string) => categoryName === category;

  return (
    <nav className="grid grid-full">
      <div className="search-bar">
        <form action="/category">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="homepage-categories" onClick={toggleSignIn}>
        {categoryPageCategories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.name}`}
            className={
              isActive(category.name) ? "selected-category" : "category-link"
            }
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNavBar;
