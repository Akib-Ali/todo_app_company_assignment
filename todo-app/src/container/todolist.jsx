import { Button, ButtonGroup } from '@chakra-ui/react'
import { DeleteIcon,Icon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { BiEdit } from 'react-icons/bi'

export const TodoList=(props)=>{

return(
    <div style={{display:"flex" , gap:"70px", border:"2px solid orange" ,width:"60%", margin :"auto",marginTop:"10px", 
    justifyContent:"space-between"}}>
      
        <div style={{minWidth:"200px"}}>
         <h2 style={{color:"#1F8A70" , fontWeight:"600"}}>{props.elem}</h2>
         </div>

        
         
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