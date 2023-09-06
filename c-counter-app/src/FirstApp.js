import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FirstApp = ({ personName, detail }) => {
  const greeting = `Hola Mundo: ${personName}`;
  const person = {
    name: "Juan",
    age: 14,
  };

  console.log({ personName });

  return (
    <Fragment>
      <h1>{greeting}</h1>
      <p className="jsonText">{JSON.stringify(person)}</p>
      <p className="detailText">{detail}</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
  personName: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  detail: "This is a default detail in propTypes",
};

export default FirstApp;
