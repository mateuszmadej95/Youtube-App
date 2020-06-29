import React from "react";

const SearchBar = (props) => {
  return (
    <div className="SearchBar ui segment">
      <form className="ui form" onSubmit={props.onSubmit}>
        <div className="field">
          <label htmlFor="search"></label>
          <input
            onChange={props.onChange}
            value={props.term}
            type="text"
            name="search"
            id="search"
          />
          <input
            type="submit"
            value="Search Videos"
            style={{
              padding: "5px 10px",
              margin: "5px auto",
              display: "block",
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
