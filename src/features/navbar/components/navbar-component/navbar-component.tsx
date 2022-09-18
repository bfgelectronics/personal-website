import {
  HomeOutlined,
  PhoneOutlined,
  PlayCircleOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

import "./navbar-component.scss";

export const NavBar = () => {
  return (
    <div className="c-navbar-wraper">
      <div className="c-navbar">
        <NavLink to="/game" className="c-navbar__element c-navbar__element--up">
          <PlayCircleOutlined className="c-navbar__element-icon" />
        </NavLink>
        <NavLink
          to="/writeups"
          className="c-navbar__element c-navbar__element--up"
        >
          <WarningOutlined className="c-navbar__element-icon" />
        </NavLink>
        <NavLink
          to="/home"
          className="c-navbar__element c-navbar__element--primary"
        >
          <HomeOutlined className="c-navbar__element-icon" />
        </NavLink>
        <NavLink
          to="/about-me"
          className="c-navbar__element c-navbar__element--down"
        >
          <UserOutlined className="c-navbar__element-icon" />
        </NavLink>
        <NavLink
          to="/contact"
          className="c-navbar__element c-navbar__element--down"
        >
          <PhoneOutlined className="c-navbar__element-icon" />
        </NavLink>
      </div>
    </div>
  );
};
