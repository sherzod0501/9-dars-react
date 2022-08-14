import { NavLink } from "react-router-dom";
import "./Films.css";

export const Films = () => {
  return (
    <div className="films">
      <div className="films-main container ">
        <div className="films-left">
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-link` : `films-link`
            }
            to="/"
          >
            Home page{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-link` : `films-link`
            }
            to="/movies"
          >
            Popular Movies{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-link` : `films-link`
            }
            to="/top"
          >
            Top-retad Movies{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-link` : `films-link`
            }
            to="/up"
          >
            Up coming Movies{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `active-link` : `films-link`
            }
            to="/tvshow"
          >
            Tv-show{" "}
          </NavLink>
        </div>
        <input className="films-input" type="text" placeholder="Search" />
      </div>
    </div>
  );
};
