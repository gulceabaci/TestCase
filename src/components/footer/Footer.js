import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footer">
        <footer className="footerContainer">
          <div class="grid-container">
            <div class="grid-item">
              <h2>Hakkımızda</h2>
              <ul>
                <li>Hakkımızda</li>
                <li>Kira Güvende Sigortası</li>
                <li>Kampanyalar</li>
                <li>Güvenle Cüzdanım</li>
                <li>Yasal Dökümanlar</li>
              </ul>
            </div>
            <div class="grid-item">
              <h2>Kariyer</h2>
              <ul>
                <li>Kariyer</li>
                <li>Fotoğrafçı Olmak</li>
              </ul>
            </div>
            <div class="grid-item">
              <h2>Partnerlerimiz</h2>
              <ul>
                <li>Sipay</li>
                <li>Coldwell Banker</li>
                <li>Century21</li>
                <li>ERA Gayrimenkul</li>
                <li>Arex Sigorta</li>
                <li>Sigortayeri</li>
                <li>TeklifimGelsin</li>

              </ul>
            </div>
            <div class="grid-item">
              <h2>Yardım ve Destek</h2>
              <ul>
                <li>Nasıl Yardım Edebiliriz?</li>
                <li>İletişim</li>
                <li>Site Haritası</li>
              </ul>
            </div>
            <div class="grid-item">
              <a href="#" class="logo">
                <center>
                <img src="https://cms.sigortayeri.com/upload/microsites/logo-2_722157.png" alt="logo" width="150" height="150" />
                </center>
              </a>
              <span>GüvenleKirala</span>
              <span>KiramKolay Bilişim Teknolojileri A.Ş.</span>
              <div class="share">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <div>
                  <center>
                  <img src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli_2.png" alt="App Store" width="150" height="50" />
                  <img src="https://cihanbuyukakkas.com/wp-content/uploads/2021/04/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli.png" alt="Google Play" width="150" height="50" />
                  </center>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div>
              <img />
              <span>2023 Tüm Hakları Saklıdır</span>
            </div>
            <div className="bottomOrta">
              <a className="bottomLink" href="#">Gizlilik Politikası</a>
              <a href="#">Kullanım Şartları</a>
            </div>
            <div>
              <span>
                Versiyon:35
              </span>
            </div>

          </div>

        </footer>
      </div>
    </div>
  );
}

export default Footer;
