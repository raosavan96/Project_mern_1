import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Query from "../Query/Query";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/productpage")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res);
      });
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-3 pt-5 ">
          {products.map((value, index) => (
            <div key={index} className="col-span-3 md:col-span-1">
              <Cards data={value} />
            </div>
          ))}
        </div>

        <Query />
      </div>
    </>
  );
}

export default Products;
