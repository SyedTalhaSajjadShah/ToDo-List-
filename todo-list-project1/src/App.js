import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () =>{

  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
};
const listOfItems = () =>{
  setItems((oldItems) =>{
   return([...oldItems,inputList])
  });
  setInputList("");
};
const deleteItems = (id) =>{
  console.log("delete");

  setItems((oldItems)=>{
    return oldItems.filter((arrElm,index)=>{
    return index!==id;
    });
  });
}; 


  return(
    <>
      <div className="main_div">
      <div className="center_div">
      <h1>ToDO List</h1>
      <input type="text" placeholder="Add an Item"  onChange={itemEvent} />
      
      <button onClick={listOfItems}>+</button>

      <ol>
      {/* <li>{inputList}</li> */}

      {Items.map((itemval, index) => {
      return <ToDoList 
      key={index}
      id={index}
      text = {itemval}
      onSelect={deleteItems}
      />
      })}
      </ol>

      </div>
      </div>
    </>
  )
}
export default App;