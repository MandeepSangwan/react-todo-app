function UserCard({ name, role, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "15px",
      width: "250px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      
      <img
        src={image}
        alt={name}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />

      <h2>{name}</h2>
      <p>{role}</p>

      <button style={{
        padding: "8px 12px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#4CAF50",
        color: "white",
        cursor: "pointer"
      }}>
        View Profile
      </button>

    </div>
  );
}

export default UserCard;