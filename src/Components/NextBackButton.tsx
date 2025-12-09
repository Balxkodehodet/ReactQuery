import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";

export default function NextBackButton() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { setUrl, url, bookId, translationId } = ctx;

  let destination = `/books/${translationId}/chapters/${bookId}`;
  let destination2 = `/books/${translationId}`;
  return (
    <>
      <Link
        to={
          url === `https://bible-api.com/data/${translationId}/${bookId}`
            ? destination2
            : destination
        }
        onClick={() => {
          if (url === `https://bible-api.com/data/${translationId}/${bookId}`) {
            setUrl(`https://bible-api.com/data/${translationId}`);
          } else {
            setUrl(`https://bible-api.com/data/${translationId}/${bookId}`);
          }
        }}
      >
        <button type="button">Back</button>
      </Link>
    </>
  );
}
