import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import Productlist from "./Productlist";

function ProductSec() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/api/productdata")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8  py-3 mx-3">
          <div>
            <h4>Products Management</h4>
            <div>
              <Link to="/addproducts">
                <button className="bg-lime-600 mt-2 text-white py-1 px-3 rounded-lg">
                  Add Product
                </button>
              </Link>
            </div>

            <div className="mt-3">
              <h5>Products</h5>
              <div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Product</th>
                      <th>Product Image</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Price</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.length === 0 ? (
                      <p className="text-[red] mt-2">Empty</p>
                    ) : (
                      product.map((value, index) => (
                        <Productlist
                          products={value}
                          index={index}
                          key={index}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSec;
