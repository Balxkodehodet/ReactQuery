import "./App.css";
import { getData } from "./Hooks/useGetData.ts";
import Verses from "./Components/Verses.tsx";
import { useContext } from "react";
import { AppContext } from "./Components/AppContext.tsx";
import Chapters from "./Components/Chapters.tsx";
import Books from "./Components/Books.tsx";
import Translations from "./Components/Translations.tsx";

function App() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { url } = ctx;
  const { data, isLoading, error } = getData(url);
  console.log(data);
  if (isLoading) return <p>Loading... </p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <h1>Translations of the bible</h1>
      <Translations />
      <Books />
      <Chapters />
      <Verses />
    </>
  );
}

export default App;
