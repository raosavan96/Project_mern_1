import React, { useState } from "react";
import {
  MDBBtn,

  MDBCard,
  MDBCardBody,
  MDBInput,

} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    const signupDatails = { userName, userEmail, userPassword };

    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupDatails)
    })
      .then((res) => res.json())
      .then((insert) => {
        console.log(insert);
        if (insert) {
          navigate("/signup");
        }
      });
  }

  return (
    <>
      <div className="h-screen w-full flex justify-center text-center">
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <form onSubmit={handleSignup}>
            <MDBCardBody className="px-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <MDBInput
                wrapperClass="mb-4"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Your Email"
                size="lg"
                id="form2"
                type="email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                size="lg"
                id="form3"
                type="password"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
              />

              <MDBBtn
                className="mb-4 w-100 gradient-custom-4"
                type="submit"
                size="lg"
              >
                Register
              </MDBBtn>
              <Link to="/">
                <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
                  Log in
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </form>
        </MDBCard>
      </div>
    </>
  );
}

export default Signup;
