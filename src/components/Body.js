import dataset from "../../assets/constants/test_data";
import { useState, useEffect } from "react";
const Body = () => {
  const [data, setdata] = useState(dataset);
  const [searchtxt, setsearchtxt] = useState("");
  // const prod_data = fetch();
  return (
    <div id="home-body">
      <div id="body-L1">
        <div id="filter-btns">
          <h2>Filter products : </h2>
          <button
            onClick={() => {
              const economiclist = dataset.filter((item) => {
                return item.variations[0].price.mrp < 300;
              });
              setdata(economiclist);
            }}
          >
            economic
          </button>
          <button
            onClick={() => {
              const premiumlist = dataset.filter((item) => {
                return item.variations[0].price.mrp > 300;
              });
              setdata(premiumlist);
            }}
          >
            premium
          </button>
          <button
            onClick={() => {
              const availabilist = dataset.filter((item) => {
                return item.in_stock;
              });
              setdata(availabilist);
            }}
          >
            In stock
          </button>
        </div>
        <div id="search">
          <input
            type="search"
            value={searchtxt}
            onChange={(e) => {
              setsearchtxt(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchlist = dataset.filter((item) => {
                return item.display_name
                  .toLowerCase()
                  .includes(searchtxt.toLowerCase());
              });
              setdata(searchlist);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div id="catalog">
        {data.map((prod) => {
          // console.log(prod);
          return <Card key={prod.product_id} product={prod} />;
        })}
      </div>
    </div>
  );
};
const Card = (props) => {
  return (
    <div id="card">
      <div id="prod_img">
        <img
          src={
            "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_304/" +
            props.product.variations[0].images[0]
          }
          alt="prod_img"
        />
      </div>
      <div id="prod_data">
        <div id="L1">
          <h3>{props.product.brand}</h3>
          <h3>{"₹" + props.product.variations[0].price.mrp}</h3>
        </div>
        <div id="L2">
          <h4>{props.product.product_name_without_brand}</h4>
        </div>
      </div>
    </div>
  );
};
export default Body;
