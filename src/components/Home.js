import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

faker.seed(111);

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(),

    // image: faker.image.food(true),
  }));

  const [products] = useState(productsArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
