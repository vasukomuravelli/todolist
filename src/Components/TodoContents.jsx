import { Button,Select } from 'antd';
import React from 'react';
import { TodoContext } from "../Context/TodoContext"
const {Option } = Select;

export const TodoContents = () => {
    const { todos, ToggleTodos, DeleteTodos,ClearCompleted } = React.useContext(TodoContext);
    const [alltodos, setAlltodos] = React.useState([]);
    React.useEffect(() => {
        setAlltodos(todos);
    }, [todos]);
    const onchange = (value) => {
        if (value === "completed") {
            let afterSort = [...todos];
            afterSort.sort((a, b) => b.Status.localeCompare(a.Status));
            setAlltodos(afterSort);
        }
        else if (value === "pending") {
            let afterSort = [...todos];
            afterSort.sort((a, b) => a.Status.localeCompare(b.Status));
            setAlltodos(afterSort);
        } else {
            setAlltodos(todos);
        }
    }
    return (
    <>
    {todos.length > 0 ?
    <div>
        <table className="table">
            <thead>
                <tr className="tablecells">
                    <th>Task Name</th>
                        <th><Select defaultValue="status" onChange={onchange} className="select">
                            <Option value="">Status</Option>
                            <Option value="completed">Completed</Option>
                            <Option value="pending">Pending</Option>
                        </Select></th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Toggle / Delete</th>
                </tr>
            </thead>
            <tbody>
                    {alltodos.map((e) => (<tr key = {e.id} className="tablecells">
                        <td>{e.task}</td>
                        <td>{e.Status==="true" ? "Completed" : "Pending"}</td>
                        <td>{e.StartDate}</td>
                        <td>{e.EndDate}</td>
                        <td><Button onClick={()=>ToggleTodos(e.id)} >Toggle</Button><Button onClick={()=>DeleteTodos(e.id)} danger>Delete</Button></td>
                </tr>))}
            </tbody>
        </table>
        <Button onClick={()=>ClearCompleted()}>Clear All Completed Tasks</Button>
    </div> : null}
    </>
    )
}