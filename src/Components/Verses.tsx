import { getData } from "../Hooks/useGetData.ts";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";
import Bible from "../assets/bible.png";
import { useNavigate, useParams } from "react-router-dom";

export default function Verses() {
  const { translationId, bookId, chapterId } = useParams();
  const navigate = useNavigate();

  const url = `https://bible-api.com/data/${translationId}/${bookId}/${chapterId}`; //bible-api.com/data/web/GEN/1
  const { data, isLoading, error } = getData(url);
  console.log("Data verses: ", data);
  if (isLoading) <p>Loading...</p>;
  if (error) <p>Error... : {error.message}</p>;
  return (
    <>
      {data?.verses && (
        <>
          <button onClick={() => navigate(-1)}>Back</button>
          <div className="verses">
            {data?.verses.map((verse: any) => {
              return (
                <div key={verse.verse}>
                  <img
                    className="church-icon"
                    src={Church}
                    alt="A cross in a church"
                  />
                  <div className="verse-book">
                    <img className="bible" src={Bible} alt="a bible book" />
                    <p className="verse">
                      Book: {verse.book}, chapter: {verse.chapter}, verse:{" "}
                      {verse.verse}: {verse.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
