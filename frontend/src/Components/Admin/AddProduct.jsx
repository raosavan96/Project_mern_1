import React, { useState } from "react";
import SideBar from "./SideBar";
import { MDBBtn, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0");
  const [rating, setRating] = useState("0");
  const [proImg, setProImg] = useState(null);

  function handleAddProducts(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("rating", rating);
    formData.append("img", proImg);

    fetch("/api/addproductdata", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navigate("/productmanage");
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8 py-3 mx-3">
          <h5 className="">Add Product here</h5>

          <div>
            <form
              className="max-w-96 mt-3"
              onSubmit={handleAddProducts}
              encType="multipart/form-data"
            >
              <MDBCardBody>
                <MDBInput
                  wrapperClass="mb-3"
                  label="Product Title"
                  size="md"
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Description"
                  size="md"
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-3"
                  label="Price"
                  size="md"
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-2"
                  label="Rating"
                  size="md"
                  id="rating"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />

                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={(e) => setProImg(e.target.files[0])}
                />

                <MDBBtn
                  className="mt-2 w-100 gradient-custom-4"
                  type="submit"
                  size="md"
                >
                  Add Product
                </MDBBtn>
              </MDBCardBody>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
 