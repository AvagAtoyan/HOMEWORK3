import { useState } from "react";
import Input from "./Input";
import Text from "./Text";
import "./App.css"

function App() {

const[value,setValue]= useState([
  { id:Math.random(),
     name:"",
     firstName:"",
     weight:"",
     price:"",
     isCompleted:false
  }
])
  return (
    <div className="App">
      <Text onAdd={(name,firstName,weight,price)=>{
             setValue([
              ...value,
              {
                id:Math.random(),
                name:name,
                firstName:firstName,
                weight:weight,
                price:price,
                isCompleted:false
              }
             ])
      }}/>
  <Input value={value} />
    </div>
  );
}

export default App;
