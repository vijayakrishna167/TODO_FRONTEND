import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { store } from "../App";
import { Navigate } from "react-router-dom";
import './styles/dashboard.css'
const Dashboard = () => {
    const [token, setToken] = useContext(store);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    // Fetch Todos on Component Mount
    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:3000/api/gettodo", {
                    headers: { "x-token": token }
                })
                .then((res) => setTodos(res.data.message))
                .catch((err) => console.log(err));
        }
    }, [token]);

    // Add New Todo
    const addTodo = () => {
        if (newTodo.trim() === "") return;

        axios
            .post(
                "http://localhost:3000/api/addtodo",
                { title: newTodo },
                { headers: { "x-token": token } }
            )
            .then((res) => {
                setTodos([...todos, res.data.todo]);
                setNewTodo(""); // Clear input
            })
            .catch((err) => console.log(err));
    };

    // Update Todo Status
    const updateTodo = (id, completed) => {
        axios
            .put(
                `http://localhost:3000/api/update/${id}`,
                { completed: !completed },
                { headers: { "x-token": token } }
            )
            .then((res) => {
                setTodos(todos.map(todo => todo._id === id ? res.data : todo));
            })
            .catch((err) => console.log(err));
    };

    // Delete Todo
    const deleteTodo = (id) => {
        axios
            .delete(`http://localhost:3000/api/delete/${id}`, {
                headers: { "x-token": token }
            })
            .then(() => {
                setTodos(todos.filter((todo) => todo._id !== id));
            })
            .catch((err) => console.log(err));
    };

    // Logout Function
    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };

    // Redirect to login if no token
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="dashboard">
            <h2>Welcome to Your Todo List</h2>

            {/* Add Todo Input */}
            <div className="add-todo">
                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
            </div>

            {/* Display Todos */}
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo._id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => updateTodo(todo._id, todo.completed)}>
                            {todo.title}
                        </span>
                        <button onClick={() => deleteTodo(todo._id)}>❌</button>
                    </li>
                ))}
            </ul>

            {/* Logout Button */}
            <button className="logout" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
