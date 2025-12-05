import { getData } from "../Hooks/useGetData.ts";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./AppContext.tsx";
import { Link } from "react-router-dom";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";

export default function Verses() {
  const [verseId, setVerseId] = useState(0);
  const [isVerse, setIsverse] = useState(false);
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url } = ctx;
  const { data, isLoading, error } = getData(url);
  let verseData;
  useEffect(() => {
    verseData = data?.verses?.filter((verse: any) => {
      return verse === verseId;
    });
  }, [verseId]);

  if (isLoading) <p>Loading...</p>;
  if (error) <p>Error... : {error.message}</p>;
  return (
    <>
      {data?.verses && (
        <div className="verses">
          {data?.verses.map((verse: any) => {
            return (
              <div key={verse.verse}>
                <img
                  className="church-icon"
                  src={Church}
                  alt="A cross in a church"
                />
                <p className="verse">
                  Book: {verse.book}, chapter: {verse.chapter}, verse:{" "}
                  {verse.verse}: {verse.text}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
