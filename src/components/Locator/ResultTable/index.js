import React from "react";
import Table from "react-bootstrap/Table"

import "./style.scss";
//============================================================================//

/**
 *
 * @props results { Array<stateName: string, yesCount: number, noCount: number>}
 */

const ResultTable = (props) => {
  // sort feature by most yes, most no
  return (
    <div className="result-table-container">
      <Table striped bordered hover size={"sm"}>
        <thead>
        <tr>
          <th>State</th>
          <th>Accepted</th>
          <th>Rejected</th>
          <th>Requested</th>
          <th>% Accepted</th>
        </tr>
        </thead>
        <tbody>
          {props.results.slice(1).map(result => {
          return (
            <tr>
              <td>{result[0]}</td>
              <td>{result[1]}</td>
              <td>{result[2]}</td>
              <td>{result[1] + result[2]}</td>
              <td>{((result[1]/(result[1] + result[2]))*100) || "0"}%</td>
            </tr>
          )
          })}
        </tbody>
      </Table>
    </div>
  )
};


export default ResultTable;
