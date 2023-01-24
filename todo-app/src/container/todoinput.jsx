export const TodoInput=(props)=>{

    return(

        <div style={{display:"flex", gap:"30px"}}>
            <input placeholder=" ✍️ Add new Todo..." value={props.inputitem} 
            onChange={((e)=> props.SetInputItem(e.target.value))}/>
            {props. toggleitem ? 
                <button title="add new task" onClick={props.handleSubmit}>Add  ✌️ New Task</button>
                :
                <button title="add new task" onClick={props.handleSubmit}>Edit  ✍️ Task</button>
            
            }
            
            <h2></h2>
        </div>
    )


}