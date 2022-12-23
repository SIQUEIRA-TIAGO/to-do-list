import React, { Fragment, useState } from "react";
import FormItem from "../form";
import Item from "../item";
import "./style.css"

const ToDoList = () => {
  const [list, setList] = useState([])

  const addItem = (item) => {
    setList([...list, item])
  }

  const removeItem = index => {
    setList(list.filter((_, idx) => index !== idx))
  }

  const clearList = () => {
    setList([])
  }

  return (
    <Fragment>
      <header>
        <h3>To Do List</h3>
        <FormItem
          addItem={addItem}
        />
      </header>
      <div className="itemsList">
        {list.map((item, i)=>(
          <Item
            key={ item.id }
            text={item.name}
            removeItem={removeItem}
            data-index={ i }
          />
        ))}
        <button onClick={clearList} className="clearButton" >Clear Items</button>
      </div>
      {/* <button onClick={ evt => removeItem(1) }>
        Remove
      </button> */}
    </Fragment>
  )
}

export default ToDoList