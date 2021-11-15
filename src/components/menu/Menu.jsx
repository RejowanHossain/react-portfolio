import React, { useState } from "react";
import "./menu.scss";
import MenuList from "./MenuList";

export default function Menu({ menuOpen, setMenuOpen }) {
  const [menu, setMenu] = useState(MenuList);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {menu.map((element) => {
          const { id, name, route } = element;
          return (
            <li key={id} onClick={() => setMenuOpen(false)}>
              <a href={route}>{name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
