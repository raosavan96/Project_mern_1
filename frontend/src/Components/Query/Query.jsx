import React, { useState } from "react";

function Query() {
  const [mail, setEmail] = useState("");
  const [userQuery, setQuery] = useState("");

  function handleQuery(e) {
    e.preventDefault();

    const queryData = { mail, userQuery };

    fetch("/api/querydata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(queryData)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    setEmail("");
    setQuery("");
  }

  return (
    <>
      <div className="w-full bg-gray-800 py-5">
        <div className="container">
          <h3 className="text-white text-center">Query Form</h3>

          <form onSubmit={handleQuery} className="max-w-sm mx-auto">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              value={mail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
            />

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium  mt-4 text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              value={userQuery}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mx-auto mt-4"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Query;
