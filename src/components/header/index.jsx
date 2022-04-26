import "./index.css";
import Logo from "../../library/logo.png";
import Arrow from "../../library/arrow.png";
import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <div className="header_parent">
      <img src={Logo} alt="" />

      <div className="header_navlink">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active_header_navlink_item" : "header_navlink_item"
          }
        >
          Featured Solutions
        </NavLink>
        <NavLink
          to="/business_solutions"
          className={({ isActive }) =>
            isActive ? "active_header_navlink_item" : "header_navlink_item"
          }
        >
          Business Solutions
        </NavLink>
        <button className="header_navlink_button">
          Get Started{" "}
          <span>
            <img src={Arrow} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}
