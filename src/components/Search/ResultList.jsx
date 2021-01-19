import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item">
          <img alt={result.name.first} className="img-fluid" src={result.picture.medium} />
          <h3 className="float-right">{result.name.first} {result.name.last}</h3>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
