import React, { useState } from "react";
import "./style.css"

const FormItem = (props) => {
  const [name, setName] = useState('')

  const handleChanges = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addItem({ name: name, id: `${Date.now()}-${parseInt(Math.random()*1000)}` })
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name..." value={name} required onChange={handleChanges}/>
      <button className="addItem" type="submit">Add item</button>
    </form>
  )
}

export default FormItem