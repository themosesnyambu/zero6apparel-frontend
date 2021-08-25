import React from "react";
import InformationForm from "../../../common/checkout/information/informationForm";
import ProductList from "../../../common/bag/productList/productList";
import TotalsComponent from "../../../common/bag/totalsCalc/totals";
import "./information.scss";

const Information = () => (
  <div className="info">
      <InformationForm />
    <div className="bag">
      <ProductList />
      <TotalsComponent />
    </div>
  </div>
);

export default Information;
