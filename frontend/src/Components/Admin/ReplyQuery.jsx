import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { MDBBtn, MDBCardBody, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";

function ReplyQuery() {
  const navi = useNavigate();

  const { rid } = useParams();

  const [to, setTo] = useState("");
  const [from, setFrom] = useState("savanyadav377@gmail.com");
  const [sub, setSub] = useState("");
  const [reply, setReply] = useState("");

  function handleQueryReply(e) {
    e.preventDefault();

    const replyData = { to, reply, sub };

    fetch(`/api/queryreplydata/${rid}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(replyData)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message) {
          navi("/userquery");
        }
      });
  }

  useEffect(() => {
    fetch(`/api/replyuser/${rid}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTo(res.useremail);
      });
  }, [rid]);

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8 py-3 mx-3">
          <h5 className="">Reply Query</h5>

          <div>
            <form className="max-w-96 mt-3" onSubmit={handleQueryReply}>
              <MDBCardBody>
                <MDBInput
                  wrapperClass="mb-3 "
                  label="To"
                  size="md"
                  id="form1"
                  type="text"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-3 "
                  label="From"
                  size="md"
                  id="form1"
                  type="text"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
                <MDBInput
                  wrapperClass="mb-3 "
                  label="Sub"
                  size="md"
                  id="form1"
                  type="text"
                  value={sub}
                  onChange={(e) => {
                    setSub(e.target.value);
                  }}
                />

                <MDBTextArea
                  label="Mail-Body"
                  className="border"
                  rows={4}
                  value={reply}
                  onChange={(e) => {
                    setReply(e.target.value);
                  }}
                />

                <MDBBtn
                  className="mt-2 w-100 gradient-custom-4"
                  type="submit"
                  size="md"
                >
                  Reply
                </MDBBtn>
              </MDBCardBody>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplyQuery;
