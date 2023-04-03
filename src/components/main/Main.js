import React from "react";
import "./styles.css";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      res: null,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_number: 1,
        number_of_advert: 20,
        advert_order_menu_id: 3,
        mapData: null,
        cityRequest: null,
        advertListDetailData: {},
        property_type_ids: null,
      }),
    };
    fetch(
      "https://cors-anywhere.herokuapp.com/https://dev.guvenlekirala.tech/api/v1/advertlist",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ res: data }));
  }

  render() {
    const { res } = this.state;
    console.log(res);
    return (
      <div className="cart-items-container">
        {res && res.advertListDatas
          ? res.advertListDatas.map((x) => (
              // <div className="cart-items">
                
              //     <div className="cart-img">
              //       <img className="img" src={x.photo_links[0]} alt="" />
              //     </div>
              //     <div className="cart-data">
              //       <div className="total-fee">
              //         <span>{x.total_fee} TL / Aylık</span>
              //       </div>
              //       <div className="public-address">
              //         <span>{x.public_address}</span><br/>
              //         <span>{x.advert_header_text}</span>
              //       </div>
              //       <div className="cart-data-bottom">
              //         <div className="net-area">
              //           <span>{x.net_area} m2 Net</span>
              //         </div>
              //         <div className="room-number">
              //           <span>
              //             {x.room_number}+{x.lounge_number} |{" "}
              //             {x.bathroom_number} Banyo{" "}
              //           </span>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
                <div
                
                style={{
                  width: "300px",
                  margin: "8px",
                  padding: "16px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  backgroundImage: "linear-gradient(to bottom, #eee, #ddd)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                <img className="img" src={x.photo_links[0].replace("1200x900", "300x300")} style={{ width: "300px", height: "150px" }} alt="" />
                 
                </div>
                <h3>{x.advert_header_text}</h3>
                <p>Room number: {x.room_number}</p>
                <p>Bathroom number: {x.bathroom_number}</p>
                <p>Lounge number: {x.lounge_number}</p>
                <p>Monthly rental fee: {x.monthly_rental_fee}</p>
                <p>Property type: {x.property_type_text}</p>
                <p>Net area: {x.net_area}</p>
                <p>Property qualification: {x.property_qualification_text}</p>
                <p>Public address: {x.public_address}</p>
                <p>Detail text: {x.detail_text}</p>
              </div>
             
            ))
          : null}
      </div>
    );
  }
}

export { Main };
