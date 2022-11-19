import { NavLink } from "react-router-dom";

const navItems = ["Home", "Movies", "Series", "Language"];

const Nav = () => {
  return (
    <div className="flex-1  sm:flex-[2]">
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item} className="inline p-4 first:p-0 ">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "#4040e7" } : null
                }
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                end
              >
                <b>{item}</b>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
