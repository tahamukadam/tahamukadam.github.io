import React from "react";
import Todo from "./todo";

export default function Todos({ todos, onDelete, toggleComplete }) {
    return (
        <div className="container mt-4">
            <h3 className="mb-3">Your Todos</h3>

            {todos.length === 0 ? (
                <div className="alert alert-info">No Todos available</div>
            ) : (
                todos.map((todo) => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onDelete={onDelete}
                        toggleComplete={toggleComplete}
                    />
                ))
            )}
        </div>
    );
}
