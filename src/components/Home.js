import React from "react";
import faker from "faker";

const Home = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatyppe.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  console.log(productsArray);

  return <div>Home</div>;
};

export default Home;
