/*
 * @Author: Apoorv Vardhan
 * @Date: 2019-09-21 19:57:56
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-21 20:34:26
 */

import React from "react";

function Card(props) {
  return (
    <div className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen">
      <div className="card">
        <div className="card-content">
          <h5 className="card-title">{props.god.name}</h5>
          <p className="card-text">{props.god.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
