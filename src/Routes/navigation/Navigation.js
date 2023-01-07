import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as AppLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signoutUser } from "../../utils/firebase.util";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


  const logoutHandler = async () => {
    await signoutUser();
  };

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
          {currentUser ? (
            <Link className="nav-links" onClick={logoutHandler} to="/">
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-links" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
