import { Button, ButtonGroup, IconButton, Icon } from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
import { BiEdit } from 'react-icons/bi'

export const TodoInput = (props) => {

    return (

        <div style={{
            display: "flex", border: "2px solid teal",
            justifyContent: "space-between", width: "50%", margin: "auto",
            marginTop: "50px", marginBottom: "40px"
        }}>
            <input  style={{height:"30px", fontSize:"20px"}}placeholder=" ✍️ Add new Todo..." value={props.inputitem}
                onChange={((e) => props.SetInputItem(e.target.value))} />
            {props.toggleitem ?

                <ButtonGroup size='sm' isAttached variant='outline'>
                    <Button onClick={props.handleSubmit}>Save New Item</Button>
                    <IconButton aria-label='Add to friends' icon={<AddIcon />} />
                </ButtonGroup>
                :
                <ButtonGroup size='sm' isAttached variant='outline'>
                    <Button onClick={props.handleSubmit}>Edit Item</Button>
                    <IconButton aria-label='Add to friends' icon={<BiEdit />} />
                </ButtonGroup>


            }





        </div>
    )


}