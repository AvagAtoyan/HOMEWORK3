import { useState } from "react";

function Text({onAdd}){
     const[name,setName]= useState("")
     const[image,setImage]= useState("")
      const[weight,setWeight]=useState("")
     const[price,setPrice]= useState("")
     return(
<form >
    <input type="text" placeholder="name" value={name} onChange={(e)=>{
        setName(e.target.value)
        
    }}/>
    <input type="text" placeholder="imageURL"  value={image} onChange={(e)=>{
        setImage(e.target.value)
    }}/>
    <input type="text" placeholder="weigt" value={weight} onChange={(e)=>{
        setWeight(e.target.value)
    }}/>
    <input type="text" placeholder="price" value={price} onChange={(e)=>{
        setPrice(e.target.value)
        
    }}/>
    <button onClick={(e)=>{
        if(name===""){
            setName(e.target.value="ERROR ERROR")

        }if(image===""){
            setImage(e.target.value="ERROR ERROR")
        }
        if(weight===""){
            setWeight(e.target.value="ERROR ERROR")
        }
        if(price===""){
            setPrice(e.target.value="ERROR ERROR")
        }
        else{
        e.preventDefault();
        onAdd(name,image,weight,price)
        setName("")
        setImage("")
        setWeight("")
        setPrice("")
        }
    }}>Add</button>
</form>
    )
}
export default Text;