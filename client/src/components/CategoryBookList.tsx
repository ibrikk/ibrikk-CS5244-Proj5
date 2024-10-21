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
        1025: courtOfMistAndRuin,
        1026: assassinsBlade,
        1027: houseInCerulean,
        1028: reckless,
        1029: thingsWeNever,
        1030: butcher,
        1031: houseOfEarth,
        1032: houseOfSky,
        1033: zodiac,
        1034: twoTwisted,
        1035: ironFlames,
        1036: worldWalkers,
      },
      Business: {
        1037: zeroToOne,
        1038: startupWife,
        1039: ceoMind,
        1040: wolrdBusiness,
        1041: britishBusinessman,
      },
      Romance: {
        1042: lastLetter,
        1043: everySummerAfter,
        1044: pumpkinSpiceCafe,
        1045: pickleballers,
        1046: itEndsWithUs,
        1047: christmasFix,
        1048: here,
        1049: miracle,
        1050: elifShafak,
      },
      Travel: {
        1051: destinationsoflife,
        1052: nationalParks,
        1053: italy,
        1054: japan,
        1055: svalbard,
        1056: rideofHerLife,
      },
      Cooking: {
        1057: mediterraneanCook,
        1058: antiInflammatory,
        1059: vegan,
        1060: italiancooking,
        1061: hundredcookies,
        1062: baking101,
        1063: foodLab,
        1064: natasha,
      },
      "Action & Adventure": {
        1065: alchemist,
        1066: lifeOfPi,
        1067: tomSawyer,
        1068: robinHood,
      },
      DIY: {
        1069: diyBiogas,
        1070: masterDiy,
        1071: diyForDummies,
        1072: diyFanzines,
        1073: diyForHomeRepair,
        1074: diyStringArt,
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
        otherCategories={categories.slice(5)}
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
