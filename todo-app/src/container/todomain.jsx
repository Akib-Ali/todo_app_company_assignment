import { useState } from "react"
import { TodoInput } from "./todoinput"

export const TodoMain=()=>{

    const [inputitem, SetInputItem] = useState("")
    const [todoitem, SetTodoItem] = useState([])
    console.log(inputitem)
    console.log(todoitem)


    const handleSubmit=()=>{
        SetTodoItem([...todoitem,inputitem])
        SetInputItem("")


    }


 return (
    <div>
        <h2>Welcome To Todo App</h2>
        <TodoInput 
        inputitem={inputitem}
        SetInputItem={SetInputItem} 
        todoitem={todoitem}  
        SetTodoItem={SetTodoItem}
        handleSubmit={handleSubmit}
        />

        {todoitem.map((e)=> <h1>{e}</h1>)}
    </div>
 )

}