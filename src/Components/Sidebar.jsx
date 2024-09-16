import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="mynav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link to="/dashboard" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>DashBoard</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add-user" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Add Books</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit-user" className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Edit Book</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;