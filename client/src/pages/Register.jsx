import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Navya" />
        <FormRow
          type="text"
          name="lastName"
          defaultValue="SGM"
          labelText="Last name"
        />
        <FormRow type="text" name="location" defaultValue="Chennai" />
        <FormRow type="email" name="email" defaultValue="navya@gmail.com" />
        <FormRow type="password" name="password" defaultValue="1234" />
        <button className="btn btn-block" type="submit">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
