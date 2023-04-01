import React, { Fragment, useEffect, useState } from "react";
import FormItem from "../form";
import Item from "../item";
import "./style.css"

const ToDoList = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const previousList = JSON.parse(localStorage.getItem('list'));
    if(previousList){
      setList(previousList)
    }
  }, [])

  const addItem = (item) => {
    const updatedList = [...list, item];
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  const removeItem = index => {
    const updatedList = list.filter((_, idx) => index !== idx);
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  const clearList = () => {
    setList([])
    localStorage.removeItem('list')
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
      <footer>
        <p className="developer">Developed by <strong>Tiago Siqueira de Oliveira</strong></p>
      </footer>
    </Fragment>
  )
}

export default ToDoList