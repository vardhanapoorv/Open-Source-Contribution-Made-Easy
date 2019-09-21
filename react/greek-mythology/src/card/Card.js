/*
 * @Author: Apoorv Vardhan
 * @Date: 2019-09-21 19:57:56
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-21 20:34:26
 */

import React from "react";

function Card(props) {
  return (
          <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{props.god.name}</h5>
              <p className="card-text">{props.god.desc}</p>
            </div>
          </div>
      );
}

export default Card;
