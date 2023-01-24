import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'

export const TodoList=(props)=>{

return(
    <div style={{display:"flex" , gap:"70px"}}>
         <h2>{props.elem}</h2>
         <button onClick={(()=> props.handleEdit(props.index))}>Edit Item</button>

         <Tooltip hasArrow label='Delete This Item' bg='teal'>
          <Button colorScheme='teal' variant='outline' onClick={(()=> props.handleDelete(props.index))}> 
         <DeleteIcon/>
          </Button> 

         </Tooltip>

         
    
     
    </div>
)


}