/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { signInAccount, getToken } from "../../../../redux/actions/authActions";
import InputField from "../../../common/forms/inputField";

const SignIn = (props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const loading = useSelector((state)=> state.auth.loading)
  const dispatch = useDispatch();
  const { history } = props;

  useEffect(() => {
    const { location } = props;
    const tokenString = location && location.search;
    if (tokenString) {
      const token = getToken(tokenString);
      const userData = null;
      dispatch(signInAccount(userData, history, token));
      history.push("/");
    }
  }, [props]);

  const onChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const accountVerificationToken = null;
    dispatch(signInAccount(values, history, accountVerificationToken));
  };

  return (
    <form onSubmit={handleSubmit} className="main-form">
      <div>
        <div className="input-field">
          <InputField
            type="email"
            value={values.email}
            onChange={onChange}
            name="email"
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        <div className="input-field">
          <InputField
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
            placeholder="Password"
            className="form-input"
            required
          />
        </div>
        <div className="form-links">
          <h5>
            <Link to="/forgot-password">forgot password?</Link>
          </h5>
        </div>
      </div>
      <div className="input-field">
        <button
          className="bttn bttn-primary btn-block bttn-large"
          type="submit"
          value="Sign In"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
          <i className="arrow-forward material-icons">arrow_forward</i>
        </button>
      </div>
    </form>
  );
};

SignIn.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default SignIn;
