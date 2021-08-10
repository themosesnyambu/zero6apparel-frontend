import React from "react";
import ReactDOM from "react-dom";
import Toastr from "toastr";
import App from "./App";
import "./index.scss";

Toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-center",
  preventDuplicates: false,
  onclick: null,
  showDuration: "5000",
  hideDuration: "3000",
  timeOut: "5000",
  extendedTimeOut: "5000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />,
  document.getElementById("app")
);
