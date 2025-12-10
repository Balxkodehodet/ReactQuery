import { getData } from "../Hooks/useGetData.ts";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Books() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { translationId } = useParams();
  const navigate = useNavigate();
  console.log("translationId: ", translationId);
  const url = `https://bible-api.com/data/${translationId}`;
  const { data, isLoading, error } = getData(url);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.log(`Big Error: ${error.message}`);
  }
  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      {data?.books && (
        <div className="books">
          {data?.books.map((book: any) => {
            return (
              <Link
                to={`/books/${translationId}/chapters/${book.id}`}
                key={book.id}
              >
                <strong>{book.name}</strong>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
