import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <h4>MERN Tasks App</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar03"
          aria-controls="navbar03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item btn btn-outline-secondary mx-1">
                <Link to={"/"} className="nav-link text-white">
                  Home
                </Link>
            </li>
            <li className="nav-item btn btn-outline-secondary mx-1">
              <Link to={"/new"} className="nav-link text-white">
                Create Tasks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
