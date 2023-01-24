export const TodoList=(props)=>{

return(
    <div style={{display:"flex" , gap:"70px"}}>
         <h2>{props.elem}</h2>
         <button>Edit Item</button>
         <button>Delete Item</button>
     
    </div>
)


}