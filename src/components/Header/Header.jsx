import React from "react";
import logo from "../../assets/img/logo.jpg";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar bg-body-tertiary">
        <div className="container d-flex flex-row">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 border border-success"
              type="search"
              placeholder="Tìm Kiếm ..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
          <div className="logo">
            <img width={250} height={150} src={logo} alt="" />
          </div>
          <div className="login d-flex flex-row align-items-center">
            <div className="mx-2">Đăng nhập | Giỏ hàng</div>
            <i className="fa-solid fa-cart-plus" />
          </div>
        </div>
      </nav>
    </div>
  );
}
