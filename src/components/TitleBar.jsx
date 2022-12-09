import React from "react";

const TitleBar = () => {
return (
    <div className="titleBar">
    <div className="logos">
        <img src="src/assets/img/GitHub.png" alt="Github" />

    </div>
    <a
        href="src/assets/img/YannStefanutti.pdf"
        target="_blank"
        rel="noreferrer"
    >
        <h1>Chaban</h1>
        <p>Closing Dates</p>
    </a>
    </div>
);
};

export default TitleBar;
