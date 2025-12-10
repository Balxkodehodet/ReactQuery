import { getData } from "../Hooks/useGetData.ts";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function Chapters() {
  const { translationId, bookId } = useParams();
  const navigate = useNavigate();

  const url = `https://bible-api.com/data/${translationId}/${bookId}`;
  const { data, isLoading, error } = getData(url);
  if (isLoading) <p>Loading...</p>;
  if (error) {
    return <p>Error... : {error.message}</p>;
  }
  return (
    <>
      {data?.chapters && (
        <>
          <button onClick={() => navigate(-1)}>Back</button>
          <div className="chapters">
            {data.chapters.map((chapter: any) => {
              return (
                <Link
                  to={`/books/${translationId}/chapters/${bookId}/verses/${chapter.chapter}`}
                  key={chapter.chapter}
                >
                  <strong>
                    {chapter.book}, chapter: {chapter.chapter}
                  </strong>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
