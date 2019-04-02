import React, {Component} from "react"

function ToDoItem(props) {

    const completedStyle = {
        fontColor: "gray",
        fontStyle: "italic",
        textDecoration: "line-through"
    }

    return(
        <div className="to-do-item">
            <input type="checkbox"  checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem