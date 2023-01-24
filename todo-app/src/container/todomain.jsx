import { useEffect, useState } from "react"
import { TodoInput } from "./todoinput"
import { TodoList } from "./todolist"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import "./Todomain.css"

export const TodoMain=()=>{

    const [inputitem, SetInputItem] = useState("")
    const [todoitem, SetTodoItem] = useState(getLocalItem())
    const [toggleitem, SettoggleItem] = useState(true)
    const [edititem,SetEditItem] = useState(null)
    console.log(inputitem)
    console.log(todoitem)


    const handleSubmit=()=>{
        if(!inputitem){
            alert("please write task ✍️")

        }
        else if(inputitem && !toggleitem){

            SetTodoItem(todoitem.map((elem)=>{

             if(elem.id == edititem){
                return {...elem , name: inputitem} 

             }
             return elem
            }))

            SettoggleItem(true)

        }
        
        else{

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


      const handleEdit=(id)=>{
        let newEdititem = todoitem.find((elem)=>{
         return elem.id === id
       })
        console.log(newEdititem)
        SettoggleItem(false)
        SetInputItem(newEdititem.name)
        SetEditItem(id)
        
      }


      const handleAllDelete=()=>{
        SetTodoItem([])
      }

      //add localstorage

      useEffect(()=>{
        localStorage.setItem("todotask", JSON.stringify(todoitem))
      },[todoitem])

      const todoapplength =  todoitem.length;
      console.log(todoapplength)

 return (
    <div className="todomaincontainer">
    <marquee>
     <h2 style={{textAlign:"center" ,color:"Teal" , fontSize:"25px" , fontWeight:"600"}}>Welcome To Todo App</h2>
    </marquee>

        <div style={{display:"flex", justifyContent:"space-between",  border:"1px solid orange", margin:"auto", width:"50%" , borderRadius:"5px"}}>
        <h2 style={{fontSize:"25px", color:"Teal", fontWeight:"600px"}}>{`Total Todo Item 👍 : ${todoapplength}`}</h2>
        
        <Tooltip hasArrow label='Delete All Item' bg='red.600'>
          <Button colorScheme='red' variant='outline' onClick={handleAllDelete}> 
         <DeleteIcon/>
          </Button> 

         </Tooltip>
        </div>
       
        <TodoInput 
        inputitem={inputitem}
        SetInputItem={SetInputItem} 
        todoitem={todoitem}  
        SetTodoItem={SetTodoItem}
        handleSubmit={handleSubmit}
        toggleitem={ toggleitem}
        SettoggleItem={SettoggleItem}
        />

        {todoitem.map((elem)=>{
            return(
                <TodoList
                   key={elem.id}
                   index={elem.id}
                    elem={elem.name}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    
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