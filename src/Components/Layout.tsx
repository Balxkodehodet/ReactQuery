import { Link, Outlet } from "react-router-dom";
import Church from "../assets/josh-eckstein-WYIslVNcCVw-unsplash.jpg";
import Breadcrumbs from "./Breadcrumbs.tsx";
import Home from "../assets/home (1).png";
import More from "../assets/more.png";
import { useEffect, useRef } from "react";

export default function Layout() {
  const menuRef = useRef<any>(null);
  const menuRef2 = useRef<any>(null);

  function showHide() {
    console.log("Toggle list clicked");
    console.log(menuRef2.current);
    menuRef2.current?.classList.toggle("hide");
  }
  return (
    <main>
      <nav className="menuNav">
        <div ref={menuRef} className="menuMore" onClick={showHide}>
          <img className="menuMoreimg" src={More} alt="a hamburger menu item" />
          <ul ref={menuRef2} className="menu-mobile">
            <Link to="/">
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
        </div>
        <ul className="menu">
          <Link to="/">
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
