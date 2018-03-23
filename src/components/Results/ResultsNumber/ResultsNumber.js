import React from "react";
import "./ResultsNumber.css";

const ResultsNumber = ({ number }) => {
  if (number !== null ){
    return <p className="ResultsNumber">{number} results</p>;
  }
  else {
    return <div>No results</div>
  }
};

export default ResultsNumber;
