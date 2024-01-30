import React from "react";

const Notch = () => {
    return (
        <div className="notch">
            <a href="mailto:2l0nX@example.com">2l0nX@example.com</a>
            <div className="language">
                <span>Language</span>
                <select style={{ fontSize: "12px" }} name="" id="">
                    <option style={{ fontSize: "12px" }} value="">English-US</option>
                    <option style={{ fontSize: "12px" }} value="">Hindi-IN</option>
                </select>
            </div>
            <button className="screen_mode">
                <img style={{ width: "20px", height: "20px" }} src="icons/moon.svg" alt="" />
            </button>
        </div>
    );
};

export default Notch;
