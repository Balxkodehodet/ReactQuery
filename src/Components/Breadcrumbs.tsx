import { getData } from "../Hooks/useGetData.ts";
import { Link, useNavigate, useParams } from "react-router-dom";
import Bible from "../assets/bible.png";
import Chapters from "../assets/videos.png";
import Translator from "../assets/translator.gif";

export default function Breadcrumbs() {
  const { translationId, bookId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Link to="/">
        <div className="translation-item">
          <img
            className="translation-img"
            src={Translator}
            alt="A animation representing translation"
          />
          <li className="menuItem">Translations</li>
        </div>
      </Link>
      <Link to={translationId ? `/books/${translationId}` : `/notfound/`}>
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
