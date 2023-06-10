import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="category container-fluid">
      <ul className="d-flex menu">
        <li className="mx-4 fs-5">
          <NavLink to={`/home`}>Giới Thiệu</NavLink>
        </li>
        <li className="mx-4 fs-5">
          <NavLink to="/nike">Túi</NavLink>
        </li>
        <li className="mx-4 fs-5">
          <NavLink to="/adidas">Nón</NavLink>
        </li>
        <li className="mx-4 fs-5">
          <NavLink to="/converse">Móc Khoá</NavLink>
        </li>
        <li className="mx-4 fs-5">
          <NavLink to="/converse">Liên Hệ</NavLink>
        </li>
      </ul>
    </div>
  );
}
