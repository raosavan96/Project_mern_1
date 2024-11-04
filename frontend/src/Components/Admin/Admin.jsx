import React from "react";
import SideBar from "./SideBar";

function Admin() {
  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8 py-3 mx-3">Admin</div>
      </div>
    </>
  );
}

export default Admin;
