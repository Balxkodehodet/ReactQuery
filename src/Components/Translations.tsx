import { getData } from "../Hooks/useGetData.ts";
import { Link } from "react-router-dom";

export default function Translations() {
  const { data, isLoading, error } = getData("https://bible-api.com/data");
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
