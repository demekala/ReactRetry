import monkey from "../../Assets/monkey.jpg"
import searchLogo from "../../Assets/SearchLogo.png"
import "./Sidebar.css"

export default function Sidebar(props) {
    return (
        <div className="sidebarContainer">
        <div className="profile">
            <img src={monkey} alt="" />
            <div className="profileInfo">
                <p>{props.name}</p>
                <p>{props.job}</p>
            </div>
        </div>
        <div className="search">
            <img src={searchLogo} alt="search logo" />
            <input type="text" name="search" id="" placeholder="search here"/>
            <div className="empty"></div>
        </div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/groups">Groups</a></li>
            <li><a href="/notifications">Notifications</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/settings">Settings</a></li>
        </ul>
        </div>
    );
}