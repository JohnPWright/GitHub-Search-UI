import React from "react";

const SearchBar = ({ term, onChangeTerm, onSearchClick, onResetClick, buttonText }) => (
    <div>
        <input
            type="text"
            value={term}
            placeholder="Search"
            onChange={onChangeTerm}
            className="search-bar"
        />
        <div className="margin-top">
            <button
                className="blue button"
                onClick={onSearchClick}>
                {buttonText}
            </button>
            <button
                className="red button"
                onClick={onResetClick}>
                    Reset
            </button>
        </div>
    </div>

);

export default SearchBar;