/*
 * @Author: Apoorv Vardhan 
 * @Date: 2019-10-03 01:58:33 
 * @Last Modified by: Apoorv Vardhan
 * @Last Modified time: 2019-10-03 01:58:53
 */

let greekGodsArray = [|
  {
    "name": "Zeus",
    "desc": "Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus"
  },
  {
    "name": "Ares",
    "desc": "Ares is the Greek god of war. He is one of the Twelve Olympians, the son of Zeus and Hera. In Greek literature, he often represents the physical or violent and untamed aspect of war"
  },
  {
    "name": "Apollo",
    "desc": "Olympian god of music, poetry, art, oracles, archery, plague, medicine, sun, light and knowledge."
  }
|];

[@react.component]
let make = () => {
  let greekGods = Array.map(g => <Card god={g}/>, greekGodsArray);
  <div className="container" style=(
    ReactDOMRe.Style.make(~paddingTop="15px", ())
  )>
    {ReasonReact.array(greekGods)}
  </div>;
}
