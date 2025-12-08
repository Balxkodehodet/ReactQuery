import { getData } from "../Hooks/useGetData.ts";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";

export default function Verses() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url } = ctx;
  const { data, isLoading, error } = getData(url);

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
