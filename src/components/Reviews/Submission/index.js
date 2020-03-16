import React from "react";

import { US_STATES } from "../../../constants/states";

import "./style.scss";
//============================================================================//

const Submission = () => {
  // to uppercase
  return (
    <div className="submission-container">
      <form>
        <label htmlFor="initials">Initials:</label>
        <input
          type="text"
          name="initials"
          className="initials-input"
          maxLength={2}
          style={{ width: "46px" }}
        />

        <label htmlFor="age-range">Age:</label>
        <select name="age-range">
          <option value="16-24">16-24</option>
          <option value="25-34">25-34</option>
          <option value="35-44">35-44</option>
          <option value="45-54">45-54</option>
          <option value="55-64">55-64</option>
          <option value="65-74">65-74</option>
          <option value="75+">75+</option>
        </select>

        <label htmlFor="gender">Gender:</label>
        <select name="gender">
          <option value="16-24">M</option>
          <option value="25-34">F</option>
          <option value="35-44">N/A</option>
        </select>

        <label htmlFor="tested">Tested:</label>
        <select name="tested">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <label htmlFor="state">State:</label>
        <select name="state">
          {US_STATES.map(state => {
            return (
              <option value={state[1]}>{state[0]} ({state[1]})</option>
            )
          })}
        </select>

        <div className="divider" />

        <div className="description-wrapper">
          <label htmlFor="description">Description:</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
};


export default Submission;
