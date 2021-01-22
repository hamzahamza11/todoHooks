import React , {useState,useEffect}from "react";
import Typography from "@material-ui/core/Typography"
import Paper  from "@material-ui/core/Paper"
import AppBar  from "@material-ui/core/AppBar"
import ToolBar  from "@material-ui/core/ToolBar"
import Grid  from "@material-ui/core/Grid"

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";


function Todo(){

    const [todos,setTodos] = useState([]);

    const addTodo = newTodoText =>{
        setTodos([...todos,{id:4,task:newTodoText,completed:false}])
    }


    return (
<Paper
style={{
    padding:0, 
    margin :0 , 
    height:"100vh",
    backgroundColor:"#fafafa"
}}
elvation={0}
>

<AppBar color="primary" position="static" 
style={{
   
    height:"64px",
    
}}
>
    <ToolBar>
        <Typography color="inherit">Todo with hooks</Typography>
    </ToolBar>
</AppBar>
<TodoForm addTodo={addTodo}/>
<TodoList  todos={todos}/>

</Paper>




    )


}

export default Todo;
