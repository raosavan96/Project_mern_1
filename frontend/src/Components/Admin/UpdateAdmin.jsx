import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { MDBBtn, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";

function UpdateAdmin() {
  const navi = useNavigate();

  const [UpTitle, setUpTitle] = useState("");
  const [Updescription, setUpDescription] = useState("");
  const [Upprice, setUpPrice] = useState("0");
  const [Uprating, setUpRating] = useState("0");
  const [status, setStatus] = useState("");
  const [upImg, setUpImg] = useState("");
  const [inOutStock, setInOutStock] = useState("");

  const { uid } = useParams();

  function handleUpdate(e) {
    e.preventDefault();

    const updatedData = { UpTitle, Updescription, Upprice, Uprating, status };

    fetch(`/api/updateddata/${uid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.message) {
          navi("/productmanage");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/updateid/${uid}`)
      .then((res) => res.json())
      .then((res) => {
        setUpTitle(res.title);
        setUpDescription(res.description);
        setUpPrice(res.price);
        setUpRating(res.rating);
      });

    fetch(`/api/statusdetails/${uid}`)
      .then((res) => res.json())
      .then((res) => {
        setInOutStock(res.productstatus);
      });
  }, [uid]);

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8 py-3 mx-3">
          <h5 className="">Update Product here</h5>

          <div>
            <form className="max-w-96 mt-3" onSubmit={handleUpdate}>
              <MDBCardBody>
                <MDBInput
                  className="mb-3"
                  wrapperclassName="mb-5 "
                  label="Product Title"
                  size="md"
                  id="form1"
                  type="text"
                  value={UpTitle}
                  onChange={(e) => {
                    setUpTitle(e.target.value);
                  }}
                />
                <MDBInput
                  className="mb-3"
                  wrapperclassName="mb-3 "
                  label="Description"
                  size="md"
                  id="form1"
                  type="text"
                  value={Updescription}
                  onChange={(e) => {
                    setUpDescription(e.target.value);
                  }}
                />
                <MDBInput
                  className="mb-3"
                  wrapperclassName="mb-3 "
                  label="Price"
                  size="md"
                  id="form1"
                  type="number"
                  value={Upprice}
                  onChange={(e) => {
                    setUpPrice(e.target.value);
                  }}
                />
                <MDBInput
                  className="mb-3"
                  wrapperclassName="mb-2 "
                  label="Rating"
                  size="md"
                  id="form1"
                  type="number"
                  value={Uprating}
                  onChange={(e) => {
                    setUpRating(e.target.value);
                  }}
                />

                <input
                  className="block w-full py-1 mb-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                  onChange={(e)=>{setUpImg(e.target.files[0])}}
                />

                <select
                  className="border border-black mb-3 w-full py-2 rounded-md"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value={inOutStock}>{inOutStock}</option>
                  <option value={"In-of-Stock"}>In-of-Stock</option>
                  <option value={"Out-of-Stock"}>Out-of-Stock</option>
                </select>

                <MDBBtn
                  className="mt-2 w-100 gradient-custom-4"
                  type="submit"
                  size="md"
                >
                  Update Products
                </MDBBtn>
              </MDBCardBody>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateAdmin;
