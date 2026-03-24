import React from "react";
import ReactDOM from "react-dom/client";

const cities =["Hà Nội","Đà Nẵng", "Hải Phòng", "HCM", "Cần Thơ"];

// const list = React.createElement(
//     "ul",
//     null,
//     React.createElement("li", null, "Hà Nội"),
//     React.createElement("li", null, "Đà Nẵng"),
//     React.createElement("li", null, "Hải Phòng"),
//     React.createElement("li", null, "Hồ Chí Minh"),
//     React.createElement("li", null, "Cần Thơ")
// );

const list =
    React.createElement("ul",null,...cities
        .map(c => React.createElement("li",null,c)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(list);