import { getData } from "../Hooks/useGetData.ts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import Bible from "../assets/bible.png";
import Chapters from "../assets/videos.png";
import Translator from "../assets/translator.gif";

export default function Breadcrumbs() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url, setUrl, bookId, translationId } = ctx;

  return (
    <>
      <Link to="/">
        <div className="translation-item">
          <img
            className="translation-img"
            src={Translator}
            alt="A animation representing translation"
          />
          <li
            className="menuItem"
            onClick={() => {
              setUrl("https://bible-api.com/data");
            }}
          >
            Translations
          </li>
        </div>
      </Link>
      <Link
        to={translationId ? `/books/${translationId}` : `/notfound/`}
        onClick={() => {
          translationId
            ? setUrl(`https://bible-api.com/data/${translationId}`)
            : getData(url);
        }}
      >
        <div className="book-item">
          <img className="bible" src={Bible} />
          <li className="menuItem">Books</li>
        </div>
      </Link>
      <Link
        to={
          bookId && translationId
            ? `/books/${translationId}/chapters/${bookId}`
            : `/notfound/`
        }
        onClick={() =>
          setUrl(`https://bible-api.com/data/${translationId}/${bookId}`)
        }
      >
        {" "}
        <div className="chapters-item">
          <img
            className="chapters-img"
            src={Chapters}
            alt="Numbers from 1 to 3 representing chapters in a book"
          />
          <li className="menuItem">Chapters</li>
        </div>
      </Link>
    </>
  );
}
