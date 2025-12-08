import { getData } from "../Hooks/useGetData.ts";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import { Link } from "react-router-dom";
export default function Chapters() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url, setUrl, translationId, bookId } = ctx;
  const { data, isLoading, error } = getData(url);
  if (isLoading) <p>Loading...</p>;
  if (error) {
    return <p>Error... : {error.message}</p>;
  }
  return (
    data?.chapters && (
      <div className="chapters">
        {data.chapters.map((chapter: any) => {
          return (
            <Link
              to={`/books/${translationId}/chapters/${bookId}/verses/`}
              onClick={() => setUrl(chapter.url)}
              key={chapter.chapter}
            >
              <strong>
                {chapter.book}, chapter: {chapter.chapter}
              </strong>
            </Link>
          );
        })}
      </div>
    )
  );
}
