import React from "react";
import "./SidebarRight.css"

const currDate = new Date().toLocaleDateString();

export default function SidebarRight() {
    return (
        <div className="sidebarRightContainer">
            <p>{currDate}</p>
        </div>
    );
}