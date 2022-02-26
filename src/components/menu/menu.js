import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";



import '../menu/menu.css';

export default (props) => {
  return (
    // Pass on our props

    <Menu  {...props}>
      <nav>
        <ul class="menu__list" id="list">
          <li class="menu__link">
            <Link to="/">Главная</Link>
          </li>
          <li class="menu__link">
            <Link to="/about">О нас</Link>
          </li>
          <li class="menu__link">
            <Link to="/jobs">Виды работ</Link>
          </li>
          <li class="menu__link">
            <Link to="/schema">Схема работ</Link>
          </li>
          <li class="menu__link">
            <Link to="/photo">Фотогалерея</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};
