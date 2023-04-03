import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="navbar">
          <div className="logoDiv">
            <a href="#">
              <img
                src="https://cms.sigortayeri.com/upload/microsites/logo-2_722157.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="divNavbar">
            <nav className="navbar">
              <a href="#">Kiracılar İçin</a>
              <a href="#">Ev Sahipleri İçin</a>
              <a href="#">Kiralama Rehberi</a>
              <a href="#">Yardım</a>
            </nav>
            <div className="faı">
              <div className="buttons">
                <FontAwesomeIcon className="btn" icon={faUser} />
                <FontAwesomeIcon className="btn" icon={faBars} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
