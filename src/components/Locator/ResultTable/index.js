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
          <th style={{width:"200px"}}>% Accepted</th>
        </tr>
        </thead>
        <tbody>
          {props.results.slice(1).map(result => {
          const totalCount = result[1] + result[2];
          const percentageTested = Math.round(result[1]/totalCount*100);
          return (
            <tr>
              <td>{result[0]}</td>
              <td>{result[1]}</td>
              <td>{result[2]}</td>
              <td>{totalCount}</td>
              <td>{percentageTested ? percentageTested + "%" : "-"}</td>
            </tr>
          )
          })}
        </tbody>
      </Table>
    </div>
  )
};


export default ResultTable;
