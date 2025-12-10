import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Layout from "./Components/Layout.tsx";
import Verses from "./Components/Verses.tsx";
import { AppProvider } from "./Components/AppContext.tsx";
import Books from "./Components/Books.tsx";
import Chapters from "./Components/Chapters.tsx";
import Translations from "./Components/Translations.tsx";
import NotFound from "./Components/NotFound.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <App /> },
        { path: "translations", element: <Translations /> },
        { path: "books/:translationId", element: <Books /> },
        {
          path: "books/:translationId/chapters/:bookId",
          element: <Chapters />,
        },
        {
          path: "books/:translationId/chapters/:bookId/verses/:chapterId",
          element: <Verses />,
        },
        { path: "notfound/", element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL } // viktig!
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
