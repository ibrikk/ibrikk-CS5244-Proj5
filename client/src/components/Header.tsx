import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "../assets/css/AppHeader.css";
import "../assets/css/global.css";
import profilePic from "../assets/images/site/profile-pic.svg";

interface HeaderProps {
  isSignedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSignedIn }) => {
  return (
    <header className="grid grid-full">
      <section className="grid grid-full">
        <div className="top-container grid-full">
          {isSignedIn ? (
            <div className="signed-in-image-container">
              <img src={profilePic} alt="Profile" />
              <div className="name-email-container">
                <p className="user-name">Ibrahim Khalilov</p>
                <p className="user-email">ibrahimk@vt.edu</p>
              </div>
            </div>
          ) : (
            <button className="sign-in-btn">Sign In</button>
          )}

          <Link to="/">
            <div className="logo-container">
              <span className="material-symbols-outlined logo pr-5">
                book_5
              </span>
              <h1>ibo.ok</h1>
            </div>
          </Link>
          <Link to="/" className="shopping-bag">
            <ShoppingBag color="black" />
            <span className="badge">3</span>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
