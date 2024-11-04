import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const nevigatePage = useNavigate();

  const [idUser, setIdUser] = useState("");
  const [passUser, setPassUser] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const logInData = { idUser, passUser };

    fetch("/api/loginuserdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logInData)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "Successfully Login...") {
          if (res.checkId && res.checkId.useremail === "savanyadav377@gmail.com") {
            nevigatePage("/admin");
          } else {
            nevigatePage("/products");
          }
        }
      });
  }

  useEffect(() => {
    fetch("/api/returndataforlogin")
      .then((res) => res.json())
      .then((returnData) => {
        console.log(returnData);
      });
  }, []);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <MDBCard className="m-5" style={{ width: "500px", height: "400px" }}>
          <form onSubmit={handleLogin}>
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                value={idUser}
                onChange={(e) => {
                  setIdUser(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="text"
                value={passUser}
                onChange={(e) => {
                  setPassUser(e.target.value);
                }}
              />

              <MDBBtn type="submit" className="w-100 mb-2" size="md">
                Log in
              </MDBBtn>

              <Link to="/signup">
                <MDBBtn className="w-100 bg-green-600 mb-4" size="md">
                  Sign up
                </MDBBtn>
              </Link>

              <div className="text-center">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </form>
        </MDBCard>
      </div>
    </>
  );
}

export default Login;
