import React, { useEffect, useState } from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import Card from "./Card";
import CategoryNavBar from "./CategoryNavBar";
import { useParams } from "react-router-dom";
import { Book, BookMock, Category, CategoryMock } from "../types";
import axios from "axios";
import Spinner from "./Spinner";

// Fiction
import courtOfMistAndRuin from "../assets/images/books//Court of mis.jpg";
import assassinsBlade from "../assets/images/books/Assassins blade.jpg";
import houseInCerulean from "../assets/images/books/House Cerulean.jpg";
import reckless from "../assets/images/books//reckless.jpg";
import thingsWeNever from "../assets/images/books/things_we_never_got_offer.jpg";
import butcher from "../assets/images/books/Butcher and Blackbird.jpg";
import houseOfEarth from "../assets/images/books/House of Earth and Blood.jpg";
import houseOfSky from "../assets/images/books//house of sky and breath.jpg";
import zodiac from "../assets/images/books/zodiac academy 2.jpg";
import twoTwisted from "../assets/images/books/two twisted crowns.jpg";
import ironFlames from "../assets/images/books/Iron_falems.jpg";
import worldWalkers from "../assets/images/books/World_of_walkers.jpg";

// Business
import zeroToOne from "../assets/images/books/startup.jpg";
import startupWife from "../assets/images/books/Startup_Wife.jpg";
import ceoMind from "../assets/images/books/CEO Mind.gif";
import wolrdBusiness from "../assets/images/books/worldBusiness.jpg";
import britishBusinessman from "../assets/images/books/britishBusinessman.jpg";

// Romance
import lastLetter from "../assets/images/books/lastLetter.jpg";
import everySummerAfter from "../assets/images/books/everysummer.jpg";
import pumpkinSpiceCafe from "../assets/images/books/9780008610678_l.jpg";
import pickleballers from "../assets/images/books/pickleballer.jpg";
import itEndsWithUs from "../assets/images/books/it ends with us.jpg";
import christmasFix from "../assets/images/books/christmasfix.jpg";
import here from "../assets/images/books/here.jpg";
import miracle from "../assets/images/books/miracle.jpg";
import elifShafak from "../assets/images/books/elifShafak.jpg";

// Travel
import destinationsoflife from "../assets/images/books/destinationsoflife.jpg";
import nationalParks from "../assets/images/books/nationalparksUS.jpg";
import italy from "../assets/images/books/italy.jpg";
import japan from "../assets/images/books/japan.jpg";
import svalbard from "../assets/images/books/svalbard.jpg";
import rideofHerLife from "../assets/images/books/rideofHerLife.jpg";

// Cooking
import mediterraneanCook from "../assets/images/books/mediterranean.jpg";
import antiInflammatory from "../assets/images/books/anti-inflammatory.jpg";
import vegan from "../assets/images/books/vegan.jpg";
import italiancooking from "../assets/images/books/italianCooking.jpg";
import hundredcookies from "../assets/images/books/cookies.jpg";
import baking101 from "../assets/images/books/gordonramsey.jpg";
import foodLab from "../assets/images/books/foodLab.jpg";
import natasha from "../assets/images/books/natasha.jpg";

// Action & Adventure
import alchemist from "../assets/images/books/alchemist.jpg";
import lifeOfPi from "../assets/images/books/lifeofPi.jpg";
import tomSawyer from "../assets/images/books/tomSawyer.jpg";
import robinHood from "../assets/images/books/robinhood.jpg";

// DIY
import diyBiogas from "../assets/images/books/DIY.jpg";
import masterDiy from "../assets/images/books/masterDiy.jpg";
import diyForDummies from "../assets/images/books/diyforDummies.jpg";
import diyFanzines from "../assets/images/books/fanzinesDiy.jpg";
import diyForHomeRepair from "../assets/images/books/DiyhomeBuild.jpg";
import diyStringArt from "../assets/images/books/diyStringArt.jpg";

// Default image
import noImage from "../assets/images/books/no-image.jpg";

interface CategoryPageProps {
  categories: Category[];
  toggleSignIn: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  categories,
  toggleSignIn,
}) => {
  const { categoryName = "New Releases" } = useParams<{
    categoryName: string;
  }>();
  const [bookList, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Function to add picture paths to each book
  const addLocalImagePaths = (books: Book[], categoryName: string) => {
    const imageMap: { [key: string]: { [key: number]: string } } = {
      Fiction: {
        1013: courtOfMistAndRuin,
        1014: assassinsBlade,
        1015: houseInCerulean,
        1016: reckless,
        1017: thingsWeNever,
        1018: butcher,
        1019: houseOfEarth,
        1020: houseOfSky,
        1021: zodiac,
        1022: twoTwisted,
        1023: ironFlames,
        1024: worldWalkers,
      },
      Business: {
        1025: zeroToOne,
        1026: startupWife,
        1027: ceoMind,
        1028: wolrdBusiness,
        1029: britishBusinessman,
      },
      Romance: {
        1030: lastLetter,
        1031: everySummerAfter,
        1032: pumpkinSpiceCafe,
        1033: pickleballers,
        1034: itEndsWithUs,
        1035: christmasFix,
        1036: here,
        1037: miracle,
        1038: elifShafak,
      },
      Travel: {
        1039: destinationsoflife,
        1040: nationalParks,
        1041: italy,
        1042: japan,
        1043: svalbard,
        1044: rideofHerLife,
      },
      Cooking: {
        1045: mediterraneanCook,
        1046: antiInflammatory,
        1047: vegan,
        1048: italiancooking,
        1049: hundredcookies,
        1050: baking101,
        1051: foodLab,
        1052: natasha,
      },
      "Action & Adventure": {
        1053: alchemist,
        1054: lifeOfPi,
        1055: tomSawyer,
        1056: robinHood,
      },
      DIY: {
        1057: diyBiogas,
        1058: masterDiy,
        1059: diyForDummies,
        1060: diyFanzines,
        1061: diyForHomeRepair,
        1062: diyStringArt,
      },
    };

    return books.map((book: Book) => ({
      ...book,
      picture: imageMap[categoryName]?.[book.bookId] || noImage, // Fallback to default image
    }));
  };

  console.log("useParam categoryName", categoryName);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:8080/IbrahimBookstoreReactFetch/api/categories/name/${categoryName}/books`
      )
      .then((result) => {
        const booksWithImages = addLocalImagePaths(result.data, categoryName);
        setBookList(booksWithImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <>
      <CategoryNavBar
        otherCategories={categories.slice(2)}
        toggleSignIn={toggleSignIn}
      />
      {loading ? (
        <Spinner />
      ) : bookList.length === 0 ? (
        <div className="not-found">
          <p>No books found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-full">
          <div className="cards-container grid grid-full">
            {bookList.map((book: Book) => (
              <Card key={book.bookId} book={book} isHomePage={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
