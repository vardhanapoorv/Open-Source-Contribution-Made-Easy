/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-09-21 20:36:13 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-09-21 20:36:46
 */
import React from "react";
import Card from "../card/Card";
import GreekGods from '../../public/greek-gods.json';

function Base() {
  return (
    <div className="container" style={{paddingTop: 15}}>
      <div className="columns is-multiline">
        {GreekGods.map((god, index) => {
          return <Card key={index} god={god} />;
        })}
      </div>
    </div>
  );
}

export default Base;
