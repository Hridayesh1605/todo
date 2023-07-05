
import { useState } from 'react';
import './App.css';
import ToDo from './ToDo'
const App = () => {

  const[inputItem,setInputItem] = useState();
  const[item,setItem] = useState([]);


  const itemChange = (e) =>{
    setInputItem(e.target.value)

  }

  function addItem(){
    setItem((prev) =>{
      return [
        ...prev,
        inputItem,
      ]
      
    })
    setInputItem("");
   

  }

  const deleteItem=(id)=>{
    console.log("clicked")
    setItem((prev)=>{
      return prev.filter((arr,index)=>{
        return index!==id;

      })
        
      
    })
  }
  return(
    <>
      <div className="main-div">
      <div className="center-div"><br/>
        <h1>To Do List</h1>
        <input type="text" placeholder="Enter items" onChange={itemChange} value={inputItem}/>
        <button onClick={addItem}>+</button>

        <ol>
          {
            item.map((val,index)=>{
              return <ToDo key={index} id = {index} lists = {val} onSelect={deleteItem}/>
            })
          }
        </ol>
      </div>
      </div>
    </>
  )
}
export default App;
