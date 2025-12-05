import { useState } from "react";
import { getData } from "../Hooks/useGetData.ts";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import { Link } from "react-router-dom";

export default function Translations() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url, setUrl, setTranslationId } = ctx;
  const { data, isLoading, error } = getData(url);
  console.log(data);
  if (isLoading) return <p>Loading... </p>;
  if (error) return <p>Error... : {error.message}</p>;
  return (
    data?.translations && (
      <div className="translations">
        <div className="translations-text">
          {data?.translations.map((translation: any) => {
            return (
              <Link
                className="translation-link"
                to={`/books/${translation.identifier}`}
                key={translation.identifier}
                onClick={() => {
                  setTranslationId(translation.identifier);
                  setUrl(translation.url);
                }}
              >
                <strong>
                  Name: {translation.name} , Language: {translation.language},{" "}
                </strong>
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
}
