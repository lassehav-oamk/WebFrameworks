import React from "react";
/* A component for rendering Title, notice how this is just a function which returns a react element */
const Title = props => {
  return <div>
    <h1 id='title'>{ props.applicationName }</h1>
    <div id='titleSub'>{ props.applicationDescription }</div>
  </div>
}
export default Title;