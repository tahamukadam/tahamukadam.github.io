import React from "react";

export default function Todo({ todo, onDelete, toggleComplete }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body">
                <h5
                    className={`card-title ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
                >
                    {todo.title}
                </h5>

                <p
                    className={`card-text ${todo.completed ? "text-decoration-line-through text-muted" : ""}`}
                >
                    {todo.desc}
                </p>

                <button
                    className={`btn btn-${todo.completed ? "secondary" : "success"} me-2`}
                    onClick={() => toggleComplete(todo)}
                >
                    {todo.completed ? "Undo" : "Complete"}
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(todo)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
