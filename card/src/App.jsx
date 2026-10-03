import React from "react";
import CardContainer from "./components/CardContainer";

const App = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      name: "Nike Air Max",
      price: "120 $",
      category: "Shoes",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      name: "Basic T-Shirt",
      price: "35 $",
      category: "Clothing",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      name: "Classic Watch",
      price: "85 $",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      name: "Coffee Maker",
      price: "150 $",
      category: "Electronics",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      name: "Makeup Set",
      price: "60 $",
      category: "Cosmetics",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      name: "Wireless Headphones",
      price: "90 $",
      category: "Electronics",
    },
  ];
  return (
    <>
      <CardContainer products={products} />
    </>
  );
};
export default App;
