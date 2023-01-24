import { useEffect, useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"

export const TodoMain=()=>{

    const [inputitem, SetInputItem] = useState("")
    const [todoitem, SetTodoItem] = useState(getLocalItem())
    console.log(inputitem)
    console.log(todoitem)


    const handleSubmit=()=>{
        if(!inputitem){
            alert("please add task")

        }else{

        const inputtask = {id : new Date().getTime().toString(), name: inputitem}
         SetTodoItem([...todoitem, inputtask])
        }
        SetInputItem("")
      }


      const handleDelete=(index)=>{
      
     const updatedTodo = todoitem.filter((elem)=>{

        return index !== elem.id
     })
     SetTodoItem(updatedTodo)

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

        {todoitem.map((elem)=>{
            return(
                <TodoList
                   key={elem.id}
                   index={elem.id}
                    elem={elem.name}
                    handleDelete={handleDelete}
                    
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