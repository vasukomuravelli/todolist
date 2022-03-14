import React from "react";
import { Button, DatePicker, Space } from 'antd';
import { nanoid } from "nanoid";
import  {TodoContext} from "../Context/TodoContext"
const { RangePicker } = DatePicker;

export const Todo = () => {
    const [todo, setTodo] = React.useState({});
    const {handleTodos} = React.useContext(TodoContext)
    const [task, setTask] = React.useState("");
    const handleDate = (a, dateString) => {
        setTodo({ ...todo, StartDate: dateString[0], EndDate: dateString[1],Status : false,id:nanoid(5),task : task });
    }
    const handleTodo = () => {
        if (Object.keys(todo).length >= 5) {
            handleTodos(todo);
            setTask("");
        } else {
            alert("Please Fill out all the fields");
        }
    }
    return (
        <div>
            <form>
                <label htmlFor="taskname"> Task </label>
                <input type="text" name="task" placeholder="Enter your Task Name" value = {task} onChange={(e)=>setTask(e.target.value)} /><br />
                <label htmlFor="date">Duration of task </label>
                <Space direction="vertical" size={12} >
                    <RangePicker showTime={{ format: 'HH:mm' }} format="DD-MM-YYYY HH:mm" onChange={handleDate} />
                </Space><br/>
                <Button onClick={handleTodo}>Submit</Button>
            </form>
        </div>
    )
}