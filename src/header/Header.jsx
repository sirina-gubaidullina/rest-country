import classes from "./Header.module.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.global}>
      <div className={classes.header}>
        <Link to="/">
          <h2>Where in the world?</h2>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
