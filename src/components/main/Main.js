import axios from "axios";
import { React, useState, useEffect } from "react";
import "./styles.css";

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://dev.guvenlekirala.tech/api/v1",
});

api.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE";
    config.headers["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept, Authorization";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const Main = () => {
  const [advertList, setAdvertList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post("/advertlist", {
          page_number: 1,
          number_of_advert: 20,
          advert_order_menu_id: 3,
          mapData: null,
          cityRequest: null,
          advertListDetailData: {},
          property_type_ids: null,
        });
        setAdvertList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      {advertList ? (
        <>
          <div className="card-container">
            {advertList.advertListDatas.map((advert) => (
              <div className="card" key={advert.advert_header_text}>
                {advert.photo_links.length > 0 && (
                  <div className="image">
                    <img
                      src={advert.photo_links[0].replace("1200x900", "300x300")}
                      alt={advert.advert_header_text}
                    />
                  </div>
                )}
                <div className="content">
                  <span className="headerTextSpan">
                    {advert.total_fee}TL / Aylık{" "}
                  </span>
                  <div className="meta">
                    <span className="public-adress">
                      {advert.public_address}
                    </span>
                    <span className="public-adress">
                      {advert.advert_header_text}
                    </span>
                  </div>
                  <div className="description-extra-content-container">
                    <div className="description">
                      <span>{advert.net_area} m2 Net</span>
                    </div>
                    <div className="extra-content">
                      <span className="extracontent">
                        {advert.room_number}+{advert.lounge_number} |{" "}
                        {advert.bathroom_number} Banyo{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Main;
