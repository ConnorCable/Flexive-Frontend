import "bulma/css/bulma.min.css";
import "./Components.css";
import { Link, useNavigate } from "react-router-dom";


function Nav(props) {

  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem("data")
    localStorage.removeItem("jwt")
    navigate("/")
  }


  let linkButton;

  if (window.location.pathname === "/profile") {
    linkButton = `/account`;
  } else {
    linkButton = "/profile";
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-start">
        <div className="navbar-item company">Flexive</div>
      </div>

      <div className="navbar-end">
        <div className="button is-link mt-3 mr-2">Funds: ${props.wallet}</div>
        <div className="button is-primary mr-2 mt-3">
          <Link className="has-text-white" to={linkButton}>
            <strong>{linkButton === "/account" ? "Wallet" : "Profile"}</strong>
          </Link>
        </div>
        <div className="button is-danger mr-2 mt-3" onClick={logOut}>
          <strong>Log Out</strong>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
