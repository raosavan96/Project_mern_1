import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="flex justify-center flex-col py-3">
        <h4 className="text-center text-white mb-4">Managements</h4>
        <Link to="/productmanage">
          <button className="text-white w-full text-sm bg-gray-900 py-2">
            Product Management
          </button>
        </Link>
        <Link to="/userquery">
          <button className="text-white mt-1 w-full text-sm bg-gray-900 py-2">
            Query Management
          </button>
        </Link>
      </div>
    </>
  );
}

export default SideBar;
