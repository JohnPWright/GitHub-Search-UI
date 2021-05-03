import React from "react";

const Header = ({ title }) => (
    <div>
        <img
            src="assets/GitHub.png"
            alt="Github"
            className="margin-top"
        />
        <h2>
            {title}
        </h2>
    </div>
);

export default Header