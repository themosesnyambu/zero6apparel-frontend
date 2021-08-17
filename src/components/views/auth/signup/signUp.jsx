import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { registerAccount } from "../../../../redux/actions/authActions";
import {
  passwordMatch,
  validatePassword,
} from "../../../../../utils/validatePassword";
import InputField from "../../../common/forms/inputField";

const SignUp = (props) => {
  const loading = useSelector((state) => state.auth.loading);
  const { history } = props;
  const dispatch = useDispatch();

  const [gender, setGender] = useState('')
  const [newsletter, setNewsLetter] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateofbirth: "",
    gender,
    newsletter,
    password: "",
    confirmPassword: "",
    error: "",
  });

  const onChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onValueChange=(e) =>{
    setGender(e.target.value);
  }

  const registerUser = (event) => {
    event.preventDefault();
    dispatch(registerAccount(values, history));
  };

  const passwordValidation = (event) => {
    event.persist();
    const status = validatePassword(event.target.value);
    setValues((prevState) => ({
      ...prevState,
      error: !status
        ? "Password must contain at least one uppercase letter, one lowercase letter and one numeric digit"
        : "",
    }));
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    return status;
  };

  const confirmPassworValidation = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const isMatch = passwordMatch(values);
    setValues((prevState) => ({
      ...prevState,
      error: !isMatch ? "Password does not match" : "",
    }));
  }, [values.confirmPassword]);

  return (
    <div>
      <form onSubmit={registerUser} className="main-form-signup">
        <div className="flex-input">
          <div className="flex-field">
            <div className="input-field">
              <InputField
                type="text"
                value={values.firstName}
                onChange={onChange}
                name="firstName"
                placeholder="First Name"
                className="form-input"
                required
              />
            </div>
          </div>
          <div className="flex-field">
            <div className="input-field">
              <InputField
                type="text"
                value={values.lastName}
                onChange={onChange}
                name="lastName"
                placeholder="Last Name"
                className="form-input"
                required
              />
            </div>
          </div>
        </div>
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
        <div className="passwordError">{values.error}</div>
        <div className="input-field">
          <InputField
            type="password"
            value={values.password}
            onChange={passwordValidation}
            name="password"
            placeholder="Password"
            className={`form-input ${values.error && "error"}`}
            required
          />
        </div>
        <div className="input-field">
          <InputField
            type="password"
            value={values.confirmPassword}
            onChange={confirmPassworValidation}
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`form-input ${values.error && "error"}`}
            required
          />
        </div>

        
        <div className="input-field">
          <InputField
            type="date"
            value={values.dateofbirth}
            onChange={onChange}
            name="dateofbirth"
            placeholder="dateofbirth"
            className={`form-input ${values.error && "error"}`}
            required
          />
        </div>

        <div className="input-field">
          <InputField
            type="radio"
            value="female"
            checked={()=>setGender("Female") }
            onChange={onValueChange}
            className={`form-input ${values.error && "error"}`}
          />
          <InputField
            type="radio"
            value="Male"
            checked={()=>setGender("Male") }
            onChange={onValueChange}
            className={`form-input ${values.error && "error"}`}
          />

        </div>

        
        <div className="input-field">
          <InputField
            type="checkbox"
            value={values.newsletter}
            onChange={()=>setNewsLetter(!newsletter)}
            name="newsletter"
            className={`form-input ${values.error && "error"}`}
          />
          Sign up for emails to get updates from Zero6 on products, offers and your Member benefits 
        </div>
        
        <div className="input-field">
          <button
            className="primary-button btn-submit"
            type="submit"
            value="Sign up"
            disabled={!!values.error}
          >
            {" "}
            {loading ? "Loading..." : "Create your free account"}
            <i className="arrow-forward material-icons">arrow_forward</i>
          </button>
        </div>
      </form>
    </div>
  );
};

SignUp.propTypes = {
  errors: PropTypes.shape({}),
  auth: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
};
SignUp.defaultProps = {
  errors: {},
  auth: {},
};

export default SignUp;
