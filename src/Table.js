import React from "react";
import "./Table.css";
import numeral from "numeral"; // to format numbers in a certain way

function Table({ countries }) {
  return (
    <div className="table">
      <div className="table__title">
        <h4>Country</h4>
        <h4>Cases</h4>
        <h4>Recovered</h4>
        <h4>Deaths</h4>
      </div>
      {countries.map((country) => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format(0, 0)}</strong>
          </td>
          <td>
            <strong>{numeral(country.recovered).format(0, 0)}</strong>
          </td>
          <td>
            <strong>{numeral(country.deaths).format(0, 0)}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
