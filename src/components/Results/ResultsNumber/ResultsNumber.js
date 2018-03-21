import React from "react";
import "./ResultsNumber.css";

const ResultsNumber = ({ number }) => {
  if (number !== null ){
    return <div className="ResultsNumber">{number} results</div>;
  }
  else {
    return <div>No results</div>
  }
};

export default ResultsNumber;
