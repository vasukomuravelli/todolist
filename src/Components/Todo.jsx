import React from "react";
import { Button, DatePicker, Space, Input } from 'antd';
import moment from "moment";
import { nanoid } from "nanoid";
import  {TodoContext} from "../Context/TodoContext"
const { RangePicker } = DatePicker;

export const Todo = () => {
    const [todo, setTodo] = React.useState({
        Task: "",
        StartDate: "",
        EndDate: "",
        Status: "",
    });
    const {handleTodos} = React.useContext(TodoContext)
    const [task, setTask] = React.useState("");
    const handleDate = (a, dateString) => {
        setTodo({ ...todo, StartDate: dateString[0], EndDate: dateString[1],Status : "false",id:nanoid(5),Task : task.toUpperCase() });
    }
    const handleTodo = () => {
        console.log(todo);
        if (todo.Task.length > 0 && todo.StartDate.length > 0 && todo.EndDate.length > 0) {
            handleTodos(todo);
            setTask("");
            setTodo({});
        } else if(task === "" && todo.StartDate === ""){
            alert("Please enter all the fields");
        } else if (task === "") {
            alert("Please enter a task");
        } else {
            alert("Please enter the duration");
        }
    }
    return (
        <div>
            <h1 className="heading">Todo List</h1>
            <form className="form">
                <label htmlFor="taskname"> Task </label>
                <Input type="text" name="task" placeholder="Enter your Task Name" value = {task} onChange={(e)=>setTask(e.target.value)} /><br />
                <label htmlFor="date">Duration of task </label>
                <Space direction="vertical" size={12} >
                    <RangePicker showTime={{ format: 'HH:mm' }} format="DD-MM-YYYY HH:mm" onChange={handleDate} disabledDate={(current) => current.isBefore(moment().subtract(1, "days")
)} />
                </Space><br/><br/>
                <Button onClick={handleTodo}>Submit</Button>
            </form>
        </div>
    )
}