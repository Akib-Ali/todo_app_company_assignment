import { useState } from "react"
import { TodoInput } from "./todoinput"

export const TodoMain=()=>{

    const [inputitem, SetInputItem] = useState("")
    console.log(inputitem)


 return (
    <div>
        <h2>Welcome To Todo App</h2>
        <TodoInput 
        inputitem={inputitem}
        SetInputItem={SetInputItem}   
        />
    </div>
 )

}