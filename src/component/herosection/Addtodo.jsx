import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Both fields are required!");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm p-4">
                <h4 className="mb-3 text-primary">Add New Todo</h4>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Todo Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter task title"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            placeholder="Enter task details"
                        />
                    </div>

                    <button className="btn btn-primary w-100 mt-2">
                        Add Todo
                    </button>
                </form>
            </div>
        </div>
    );
}
