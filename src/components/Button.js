import React from "react";
import "./Button.js";
import { Link } from "react-router-dom";
export default function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
