import { createContext, useState, type ReactNode } from "react";

type AppContextType = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  bookId: string;
  setBookId: React.Dispatch<React.SetStateAction<string>>;
  translationId: string;
  setTranslationId: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [url, setUrl] = useState("https://bible-api.com/data"); //bible-api.com/data/web/GEN/1
  const [bookId, setBookId] = useState("");
  const [translationId, setTranslationId] = useState("");
  return (
    <AppContext.Provider
      value={{
        url,
        setUrl,
        bookId,
        setBookId,
        translationId,
        setTranslationId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
