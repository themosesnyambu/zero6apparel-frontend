import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../forms/inputField";
import "./informationForm.scss";

const InformationForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    postalcode: "",
    phone: "",
  });

  const onChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          Contact information
          <br /> Already have an account?{" "}
          <Link to="/signin">
            <button className="underlined-button" type="button">
              Login
            </button>
          </Link>
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
              type="text"
              value={values.firstname}
              onChange={onChange}
              name="firstname"
              placeholder="First Name"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.lastname}
              onChange={onChange}
              name="lastname"
              placeholder="Last Name"
              className="form-input"
              required
            />
          </div>
          Shipping Address
          <div className="input-field">
            <InputField
              type="text"
              value={values.address1}
              onChange={onChange}
              name="address1"
              placeholder="Address 1"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.address2}
              onChange={onChange}
              name="address2"
              placeholder="Address 2"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.city}
              onChange={onChange}
              name="city"
              placeholder="City"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.country}
              onChange={onChange}
              name="country"
              placeholder="country"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.postalcode}
              onChange={onChange}
              name="postalcode"
              placeholder="Postal Code"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <InputField
              type="text"
              value={values.phone}
              onChange={onChange}
              name="phone"
              placeholder="Phone"
              className="form-input"
              required
            />
          </div>
          <div className="input-field">
            <button
              className="button primary-button "
              type="submit"
              value="Sign In"
            >
              CONTINUE TO SHIPPING
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationForm;
