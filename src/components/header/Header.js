import React from "react";
import "./styles.css";

function Header() {
  return (
    <div>
      <header class="header">
        <div className="navbar">
          <div className="logoDiv">
            <a href="#">
            <img src="https://cms.sigortayeri.com/upload/microsites/logo-2_722157.png" alt="logo" width="150" height="150" />
            </a>
          </div>
          <div>
            <nav class="navbar">
              <a href="#">Kiracılarİçin</a>
              <a href="#">Ev Sahipleriİçin</a>
              <a href="#">KiralamaRehberi</a>
              <a href="#">Yardım</a>
            </nav>

            <div class="buttons">
              <button id="search-btn">
                <i class="fas fa-search"></i>
              </button>
              <button id="menu-btn">
                <i class="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
