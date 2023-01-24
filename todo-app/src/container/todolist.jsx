import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon,Icon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'

export const TodoList=(props)=>{

return(
    <div style={{display:"flex" , gap:"70px"}}>
         <h2>{props.elem}</h2>

        
         
          <Tooltip hasArrow label='Edit This Item' bg='teal'>
           <Button colorScheme='teal' variant='outline' onClick={(()=> props.handleEdit(props.index))}> 
        
           <Icon as={BiEdit} boxSize="25px" mx={4} />

          </Button> 

         </Tooltip>


         <Tooltip hasArrow label='Delete This Item' bg='orange'>
          <Button colorScheme='orange' variant='outline' onClick={(()=> props.handleDelete(props.index))}> 
           <Icon as={DeleteIcon } boxSize="25px" mx="4"/>
          </Button> 

         </Tooltip>

         
    
     
    </div>
)


}