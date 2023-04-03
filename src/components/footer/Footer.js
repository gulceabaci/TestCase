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
              <h4 className="h4">/ / / / / / / / / / / /</h4>
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
              <h4 className="h4">/ / / / / / / / / / / /</h4>
              <ul>
                <li>Kariyer</li>
                <li>Fotoğrafçı Olmak</li>
              </ul>
            </div>
            <div class="grid-item">
              <h2>Partnerlerimiz</h2>
              <h4 className="h4">/ / / / / / / / / / / /</h4>
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
              <h4 className="h4">/ / / / / / / / / / / /</h4>
              <ul>
                <li>Nasıl Yardım Edebiliriz?</li>
                <li>İletişim</li>
                <li>Site Haritası</li>
              </ul>
            </div>
            <div class="grid-item">
              <a href="#" class="logo">
                <img src="#" alt="logo" />
              </a>
              <span>GüvenleKirala</span>
              <span>KiramKolay Bilişim Teknolojileri A.Ş.</span>
              <div class="share">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <div>
                    <img src="data:image/png;base64,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" />
                  
                                       
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
                    Versiyon:
                </span>
            </div>

          </div>
         
        </footer>
      </div>
    </div>
  );
}

export default Footer;
