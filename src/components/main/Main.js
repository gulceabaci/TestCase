import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      res: null,
    };
  }

  componentDidMount() {
    // POST request using fetch with set headers
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
      <div>
        {res && res.advertListDatas
          ? res.advertListDatas.map((x) => (
              //grid yapısı : içinde x.text, vs
              <span>{x.detail_text} </span>
            ))
          : null}
      </div>
    );
  }
}

export { Main };
