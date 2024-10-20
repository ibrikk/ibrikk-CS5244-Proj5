import React from "react";
import { Link } from "react-router-dom";

interface DropdownCategory {
  value: string;
  name: string;
  navigateTo: string;
}

interface HomePageCategory {
  link: string;
  name: string;
}

interface HomeNavBarProps {
  toggleSignIn: () => void;
}

const HomeNavBar: React.FC<HomeNavBarProps> = ({ toggleSignIn }) => {
  const dropdownCategories: DropdownCategory[] = [
    {
      value: "1",
      name: "Fiction",
      navigateTo: "/category/Fiction",
    },
    {
      value: "2",
      name: "Non-fiction",
      navigateTo: "/category/Non-fiction",
    },
    {
      value: "3",
      name: "Science",
      navigateTo: "/category/Science",
    },
    {
      value: "4",
      name: "History",
      navigateTo: "/category/History",
    },
    {
      value: "5",
      name: "Biography",
      navigateTo: "/category/Biography",
    },
  ];

  const homePageCategories: HomePageCategory[] = [
    {
      link: "/category/NewReleases",
      name: "New Releases",
    },
    {
      link: "/category/BestSellers",
      name: "Best Sellers",
    },
    { link: "/category/Trending", name: "Trending" },
    { link: "/category/OnSale", name: "On Sale" },
  ];

  return (
    <nav className="grid grid-full">
      <div className="custom-select">
        <select>
          {dropdownCategories.map((category) => (
            <option value={category.value}>{category.name}</option>
          ))}
        </select>
        <div className="select-styled">Categories</div>
        <ul className="select-options">
          {dropdownCategories.map((category) => (
            <Link to={category.navigateTo}>
              <li rel={category.value}>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="search-bar">
        <form action="/category">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="homepage-categories" onClick={toggleSignIn}>
        {homePageCategories.map((category) => (
          <Link to={category.link} className="category-link">
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HomeNavBar;
