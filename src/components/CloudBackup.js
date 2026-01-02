import React from "react";

export default function CloudBackup() {
  const backup = () => {
    console.log("Mock backup to cloud triggered");
    alert("Backup triggered!");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>Cloud Backup</h3>
      <button onClick={backup}>Trigger Backup</button>
    </div>
  );
}
