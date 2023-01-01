import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <AppLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-links" to="/shop">
                SHOP
            </Link>
            <Link className="nav-links" to="/sign-in">
                SIGN IN
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;  