import { useEffect, useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"

export const TodoMain=()=>{

    const [inputitem, SetInputItem] = useState("")
    const [todoitem, SetTodoItem] = useState(getLocalItem())
    console.log(inputitem)
    console.log(todoitem)


    const handleSubmit=()=>{
        SetTodoItem([...todoitem,inputitem])
        SetInputItem("")
      }


      //add localstorage

      useEffect(()=>{
        localStorage.setItem("todotask", JSON.stringify(todoitem))
      },[todoitem])

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

        {todoitem.map((elem,index)=>{
            return(
                <TodoList
                   key={index}
                    elem={elem}
                    index={index}
                />
            )
        })}
    </div>
 )

}


const getLocalItem=()=>{
    let todotask = localStorage.getItem("todotask")
    if(todotask){
        return JSON.parse(localStorage.getItem("todotask"))

    }else{
        return []
    }
}