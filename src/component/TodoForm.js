import React from "react";
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import useForm from "../Hooks/useForm"
function TodoForm({addTodo}){

    const [value,handleChange,reset] = useForm("")

    return(
        <Paper>
            <form
            onSubmit={
                (e)=>{
                    e.preventDefault();
                    addTodo(value);
                    reset();

                }}
            >
            <TextField value={value} onChange={handleChange} />
            <button>Submit</button>
       
            </form>
            </Paper>
    )
}

export default TodoForm;