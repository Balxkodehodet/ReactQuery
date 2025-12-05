import { Link, Outlet } from "react-router-dom";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";
import Breadcrumbs from "./Breadcrumbs.tsx";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";

export default function Layout() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "Appcontext is undefined, make sure you are using App provider"
    );
  }
  const { setUrl } = ctx;
  return (
    <main>
      <nav className="menuNav">
        <ul className="menu">
          <Link
            to="/"
            onClick={() => {
              setUrl("https://bible-api.com/data");
            }}
          >
            <li>Home</li>
          </Link>
          <Breadcrumbs />
        </ul>
      </nav>

      <img className="church" src={Church} />
      <Outlet />
    </main>
  );
}
