import React, { Fragment, useState } from "react";
import FormItem from "../form";
import Item from "../item";
import "./style.css"

const ToDoList = () => {
  const [list, setList] = useState([])

  const addItem = (item) => {
    setList([...list, item])
  }
  const deleteItem = (index) => {
    list.splice(index, 1)
    setList([...list])
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
        {list.map((item)=>(
          <Item
          text={item.name}
          index={list.indexOf(item)}
          deleteItem={deleteItem}
          />
        ))}
        <button onClick={clearList} className="clearButton" >Clear Items</button>
      </div>
    </Fragment>
  )
}

export default ToDoList