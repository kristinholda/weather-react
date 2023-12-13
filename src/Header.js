import React from "react";

export default function Header() {
  let headerData = {
    city: "New Haven",
    date: "Tuesday November 28, 2023 | 13:23",
  };

  return (
    <div className="row header">
      <div className="col-6">
        <h1 className="city" id="city">
          {headerData.city}
        </h1>
        <h2 className="date-hour" id="date-hour">
          {headerData.date}
        </h2>
      </div>
      <div className="col-5">
        <form id="search-form">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                className="form-control"
                placeholder="Type a city"
                id="city-input"
                autocomplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                className="btn btn-outline-primary search-button"
                value="Search"
                id="search-button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
