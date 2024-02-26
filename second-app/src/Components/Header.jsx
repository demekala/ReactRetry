import logo from "../logo.svg";
import "./Header.css"

export default function Header() {
    return (
      <header className="comcept-text">
        <img src={logo} alt="" />
        <h1>React Essentials</h1>
      </header>
    );
  }