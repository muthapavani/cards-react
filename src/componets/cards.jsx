import "./cards.css";
import { Products } from "../data";

const allproducts = (val, ind) => {
  return (
    <>
      <div className="cards">
        <h1>
          {val.category},{val.id}
        </h1>
        <div>
          <img src={val.image} />
        </div>
        <div>
          <h4>{val.title}</h4>
          <p className="desc">{val.description}</p>

          <b>Price:{val.price}</b>
          <br />
          <b className="rate">Rating:{val.rating.rate}</b>
          <b>Count{val.rating.count}</b>
        </div>
      </div>
    </>
  );
};

const Cards = () => {
  console.log(Products);
  return (
    <>
      <div className="container">
        <h1>Products</h1>
        <div className="cardcon">{Products.map(allproducts)}</div>
      </div>
    </>
  );
};
export default Cards;
