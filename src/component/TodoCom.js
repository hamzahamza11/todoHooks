import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
function TodoCom({task,completed}){

    return(
        <ListItem>
        <ListItemText>

       <Checkbox checked={completed}/>
          {task}
          <ListItemSecondaryAction>
              <IconButton>
                  <DeleteIcon />
            </IconButton>
              <IconButton>
                  <EditIcon/>
             </IconButton>
          </ListItemSecondaryAction>

    
        </ListItemText>
                </ListItem>
    );
}



export default TodoCom;