import data from "./test_data";
const Body = () => {
  return (
    <div id="home-body">
      <div id="body-L1">
        <div id="filter-btns">
          <h2>Filter products : </h2>
          <button>economic</button>
          <button>premium</button>
          <button>In stock</button>
        </div>
        <div id="search">
          <input type="search" />
          <button>search</button>
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
