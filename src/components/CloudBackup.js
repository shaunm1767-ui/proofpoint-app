import React from "react";

export default function CloudBackup() {
  const handleBackup = () => {
    alert("Cloud backup triggered (stub)");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px" }}>
      <h3>Cloud Backup</h3>
      <p>Secure backup of device ownership data.</p>
      <button onClick={handleBackup}>Trigger Backup</button>
    </div>
  );
}
