/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-10-03 01:58:39 
 * @Last Modified by: Apoorv Vardhan 
 * @Last Modified time: 2019-10-03 01:58:39 
 */

[@react.component]
let make = (~god) => {
    <div className="card" style=(
        ReactDOMRe.Style.make(~width="18rem", ())
      )>
    <div className="card-body">
      <h5 className="card-title">{ReasonReact.string(god##name)}</h5>
      <p className="card-text">{ReasonReact.string(god##desc)}</p>
    </div>
  </div>
}
