import { NavLink } from "react-router-dom";

function SideBar() {
 
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px;"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item ps-5 pb-3">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-white text-decoration-underline align-content-end" : "text-white text-decoration-none align-content-end"} >
              <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
              Home
            </NavLink>
          </li>
          <li className="nav-item ps-5 pb-3">
            <NavLink to="/employees" className={({ isActive }) => isActive ? "text-white text-decoration-underline align-content-end" : "text-white text-decoration-none align-content-end"}>
            <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
              Utenti
            </NavLink>
          </li>
        </ul>
        <hr/>
        <div className="dropdown">
          <NavLink className="d-flex align-items-center text-white text-decoration-none" to="/">
            <img src="https://i.pinimg.com/736x/d0/76/79/d07679f66e8933049aa1cb888c5bd2da.jpg" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>Green Team</strong>
          </NavLink>
          {/* <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default SideBar;
