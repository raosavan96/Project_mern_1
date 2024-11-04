import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Productlist({ products, index }) {
  const navi = useNavigate();

  const { _id, title, description, price, proimg, rating, productstatus } =
    products;

  function handleDelete(did) {
    fetch(`/api/deletedata/${did}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navi("/productmanage");
        }
      });
  }

  return (
    <>
      <tr>
        <td>{index + 1}</td>

        <td>{title}</td>
        <td>
          <img style={{width:"50px", height:"50px"}} src={`/uploads/${proimg}`} alt="" />
        </td>
        <td>{description}</td>
        <td>{productstatus}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="bg-orange-400 text-white  px-2 rounded-lg">
              Update
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="bg-red-400 text-white  px-2 rounded-lg ms-3"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default Productlist;
