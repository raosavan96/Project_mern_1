import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function UserQuery() {
  const [querys, setQuerys] = useState([]);

  function handleQuery(id) {
    fetch(`/api/querydelete/${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  useEffect(() => {
    fetch("/api/userquerys")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setQuerys(res);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-10 h-screen">
        <div className="col-span-2 h-full w-full bg-black">
          <SideBar />
        </div>
        <div className="col-span-8 py-3 mx-3">
          <div>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Email</th>
                  <th>Query</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {querys.length === 0
                  ? <p className='text-[red] text-center mt-2 block'>Empty</p>
                  : querys.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1} </td>
                        <td>{value.useremail}</td>
                        <td>{value.userquery}</td>
                        <td>{value.queryStatus}</td>
                        <td>
                          <Link to={`/queryreply/${value._id}`}>
                            <button className="bg-[green] text-white px-2 rounded-md">
                              Reply
                            </button>{" "}
                          </Link>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              handleQuery(value._id);
                            }}
                            className="bg-[red] text-white px-2 rounded-md"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserQuery;
