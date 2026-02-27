function TaskItem({task,status,Delete}) {
    return (
        <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
        <div style={{
            display: "flex", gap: "20px", padding: "20px"
        }}>
        <h2>{task}</h2>
        <p>{status}</p>

        <button className="button" style={{
        padding: "8px 12px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "red",
        color: "white",
        cursor: "pointer",
      }}>
        Task Done 
      </button>




        </div>

        </div>
    );
}

export default TaskItem;