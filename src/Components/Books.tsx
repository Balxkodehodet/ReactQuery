import { getData } from "../Hooks/useGetData.ts";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import { Link } from "react-router-dom";

export default function Books() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url, setUrl, setBookId, translationId } = ctx;
  const { data, isLoading, error } = getData(url);
  if (isLoading) {
    <p>Loading...</p>;
  }
  if (error) {
    console.log(`Big Error: ${error.message}`);
  }
  return (
    data?.books && (
      <div className="books">
        {data?.books.map((book: any) => {
          return (
            <Link
              to={`/books/${translationId}/chapters/${book.id}`}
              onClick={() => {
                setBookId(book.id);
                setUrl(book.url);
              }}
              key={book.id}
            >
              <strong>{book.name}</strong>
            </Link>
          );
        })}
      </div>
    )
  );
}
