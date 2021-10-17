import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          {" "}
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

//pass in object where name of property is actual name --- state is the root reducer
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

//used anytime we need properties from reducers
export default connect(mapStateToProps)(Header);
