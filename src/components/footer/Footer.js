import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <footer className="footerContainer">
        <div class="grid-container">
          <div class="grid-item">
            <h2>Hakkımızda</h2>
            <p className="grid-item-p">/ / / / / / / / / / /</p>
            <ul>
              <li>Güvenlekirala Nedir?</li>
              <li>Nasıl Kullanılır?</li>
              <li>Avantajları Nelerdir?</li>
            </ul>
          </div>
          <div class="grid-item">
            <h2>Kariyer</h2>
            <p className="grid-item-p">/ / / / / / / / / / /</p>
            <ul>
              <li>Gayrimenkul Ortağı</li>
              <li>Fotoğrafçı Olmak</li>
              <li>Ödemeler ve Hizmetler</li>
              <li>Süreçler ve Sözleşmeler</li>
              <li>Güvenilir Kiracı Nedir?</li>
            </ul>
          </div>
          <div class="grid-item">
            <h2>Evinizi Kiralayın</h2>
            <p className="grid-item-p">/ / / / / / / / / / /</p>
            <ul>
              <li>Evimi Nasıl Kiralarım?</li>
              <li>Ödemeler ve Vergilendirme</li>
              <li>Nasıl İyi Ev Sahibi Olunur?</li>
              <li>Kullanıcı Yorumları</li>
              <li>Bilgi Merkezi</li>
            </ul>
          </div>
          <div class="grid-item">
            <h2>Yardım ve Destek</h2>
            <p className="grid-item-p">/ / / / / / / / / / /</p>
            <ul>
              <li>Sıkça Sorulan Sorular</li>
              <li>Bilgi Merkezi</li>
              <li>Destek Hattı</li>
            </ul>
          </div>
          <div class="grid-item">
            <a href="#" class="logo">
              <img
                className="logo-img"
                src="https://cms.sigortayeri.com/upload/microsites/logo-2_722157.png"
                alt="logo"
                width="150"
                height="150"
              />
            </a>
            <p className="spanTxt">KiramKolay Bilişim Teknolojileri A.Ş.</p>
            <div class="share">
              <div className="icon-sosyal">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="logo-store">
                <img
                  src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli_2.png"
                  alt="App Store"
                  width="150"
                  height="50"
                />
                <img
                  src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli.png"
                  alt="Google Play"
                  width="150"
                  height="50"
                />
                <img
                  src="https://teknosafari.net/wp-content/uploads/2021/03/appgallery-1024x307.png"
                  alt="Huawei Play"
                  width="150"
                  height="50"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">
            <span>2023 Tüm Hakları Saklıdır</span>
          </div>
          <div className="link">
            <a className="bottomLink" href="#">
              Gizlilik Politikası
            </a>
            <a href="#">Kullanım Şartları</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
