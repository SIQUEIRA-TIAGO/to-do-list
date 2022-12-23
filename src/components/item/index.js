import React, { useEffect, useState } from "react";
import "./style.css"
import doneIcon from "../../imgs/green-checkmark-line-icon.png"
import deleteIcon from "../../imgs/red-x-line-icon.png"

const Item = (props) => {
  const [ done, setDone ] = useState(false);

  return (
    <div className={ `item${done ? ' done': ''}` }>
      <p className="li">
        {props.text}
      </p>
      <div className="btnArea">
        <button className="itemBtn" onClick={ () => setDone(prev => !prev) }><img src={doneIcon} alt="done"/></button>
        <button className="itemBtn" onClick={ evt => {
          props.removeItem(props['data-index']);
        } }>
          <img src={deleteIcon} alt="delete"/>
        </button>
      </div>
    </div>
  )
}

export default Item