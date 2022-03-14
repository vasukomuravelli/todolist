import { Button } from 'antd';
import React from 'react';
import {TodoContext} from "../Context/TodoContext"

export const TodoContents = () => {
    const { todos,ToggleTodos,DeleteTodos } = React.useContext(TodoContext);
    return (
    <>
        {todos.length > 0 ? <table className="table">
            <thead>
                <tr className="tablecells">
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>StartDate</th>
                    <th>EndDate</th>
                    <th>Toggle / Delete</th>
                </tr>
            </thead>
            <tbody>
                    {todos.map((e) => (<tr key = {e.id} className="tablecells">
                        <td>{e.task}</td>
                        <td>{e.Status ? "Completed" : "Pending"}</td>
                        <td>{e.StartDate}</td>
                        <td>{e.EndDate}</td>
                        <td><Button onClick={()=>ToggleTodos(e.id)}>Toggle</Button><Button onClick={()=>DeleteTodos(e.id)}>Delete</Button></td>
                </tr>))}
            </tbody>
            </table> : null}
    </>
    )
}