import React from "react";

function EachTodo(props){
    return(
        <div className="d-flex align-items-center gap-2">
            <input type="checkbox" 

                    onChange={() => props.handleCheckbox(props.index)}
                    checked={props.ele.completed ? "true" : ""}/>

                    <div className={props.ele.completed ? "text-decoration-line-through" : ""}>{props.ele.title}</div>

                    <button className="btn btn-warning" onClick={() => props.handleEdit(props.ele, props.index)}>Edit</button>
                    
                    <button className="btn btn-danger" onClick={() => props.handleDelete(props.index)}>Delete</button>
        </div>
    )
}
export default EachTodo;