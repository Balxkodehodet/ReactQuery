import { Link, Outlet } from "react-router-dom";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";
import Breadcrumbs from "./Breadcrumbs.tsx";
import { useContext } from "react";
import { AppContext } from "./AppContext.tsx";
import Home from "../assets/home (1).png";

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
            <div className="home-item">
              <img
                className="home-img"
                src={Home}
                alt="Image of a home or a house from the front"
              />
              <li>Home</li>
            </div>
          </Link>
          <Breadcrumbs />
        </ul>
      </nav>

      <img className="church" src={Church} />
      <Outlet />
    </main>
  );
}
