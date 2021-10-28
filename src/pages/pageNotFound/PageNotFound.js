import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/PageNotFound.scss";

const PageNotFound = () => {
  const history = useHistory();

  const redirectHandler = () => {
    history.push("/");
  };

  return (
    <div className="main-wrapper">
      <div className="inner-wrapper">
        <h3>Oops! The page you're looking for could not be found.</h3>
        <div className="redirect-btn-wrapper">
          <button
            type="button"
            onClick={redirectHandler}
            className="redirect-btn"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
