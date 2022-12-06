import React, { useState } from "react";
import "./style.css"
import doneIcon from "../../imgs/green-checkmark-line-icon.png"
import deleteIcon from "../../imgs/red-x-line-icon.png"

const Item = (props) => {
  const doneIt = () => {
    props.doneItem(props.index)
  }

  const deleteIt = () => {
    props.deleteItem(props.index)
  }

  return (
    <div className={props.classMark}>
      <p className="li">
        {props.text}
      </p>
      <div className="btnArea">
        <button className="itemBtn" onClick={doneIt}><img src={doneIcon} alt="done"/></button>
        <button className="itemBtn" onClick={deleteIt}><img src={deleteIcon} alt="delete"/></button>
      </div>
    </div>
  )
}

export default Item