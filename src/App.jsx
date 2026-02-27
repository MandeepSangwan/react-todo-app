import { useState } from "react";
import UserCard from "./components/UserCard";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  function handleAddTask() {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput(""); // clear input
  }

  // 3️⃣ Delete Task Function
  function handleDelete(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  // 4️⃣ Toggle Task Completed
  function handleToggle(id) {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* UserCard */}
      <UserCard
        name="Mandeep"
        role="Frontend Developer"
        image="https://i.pravatar.cc/150?img=1"
      />

      {/* Input Section */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter new task"
          style={{ padding: "8px", width: "200px" }}
        />
        <button
          onClick={handleAddTask}
          style={{
            padding: "8px 12px",
            marginLeft: "10px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Add Task
        </button>
      </div>

      {/* Tasks List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task.text}
            completed={task.completed}
            onDelete={() => handleDelete(task.id)}
            onToggle={() => handleToggle(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;