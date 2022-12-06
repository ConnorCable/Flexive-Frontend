import "./Components.css";
import React from "react";



const Propertybar = (props) => {

  


    
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      id="propertynav"
    >
      <div className="navbar-start">
        <div className="navbar-item is-size-2 pb-3" id="title">
          Your Investments
        </div>
        
      </div>

      <div className="navbar-end">
        
      <div className="navbar-item button is-primary mr-5 mt-5" id="newbutton" onClick={props.createInvestment} >New</div>
        <div
          className="navbar-item has-dropdown is-hoverable mt-1"
          id="dropdown"
        >
          <div className="navbar-link button is-primary mt-2">Sort</div>

          <div className="navbar-dropdown py-2">
            <div className="navbar-item sort" onClick={props.sorts[0]}>
              Alphabetically
            </div>
            <hr className="navbar-divider" />
            <div className="navbar-item sort is-light" onClick={props.sorts[1]}>
              Investment Low-High
            </div>
            <hr className="navbar-divider" />
            <div className="navbar-item sort" onClick={props.sorts[2]}>
              Investment High-Low
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Propertybar;
