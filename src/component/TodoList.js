import React, {useState,useEffect} from "react"
import Paper  from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import Divider  from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

function TodoList(props){
    const todoList = props.todos.map(todo =>{
       return <Paper>
            <List>
                <ListItem>
    <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            </List>
        </Paper>
        
    })
return(
<div>
   {todoList}
</div>

    )

}


export default TodoList;