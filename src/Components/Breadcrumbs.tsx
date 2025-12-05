import { getData } from "../Hooks/useGetData.ts";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext.tsx";
export default function Breadcrumbs() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url, setUrl, bookId, setBookId, translationId, setTranslationId } =
    ctx;
  const { data } = getData(url);

  return (
    <>
      <Link to="/">
        <li
          className="menuItem"
          onClick={() => {
            setUrl("https://bible-api.com/data");
          }}
        >
          Translations
        </li>
      </Link>
      <Link
        to={`/books/${translationId}`}
        onClick={() => setUrl(`https://bible-api.com/data/${translationId}`)}
      >
        <li className="menuItem">Books</li>
      </Link>
      <Link
        to={`/books/${translationId}/chapters/${bookId}`}
        onClick={() =>
          setUrl(`https://bible-api.com/data/${translationId}/${bookId}`)
        }
      >
        <li className="menuItem">Chapters</li>
      </Link>
    </>
  );
}
