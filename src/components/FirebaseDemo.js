import React, { useState } from "react";

export default function FirebaseDemo() {
  const [data, setData] = useState([]);

  // Mock fetch
  const fetchData = () => {
    setData(["Device1", "Device2"]);
    console.log("Fetched mock data from Firebase");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>Firebase Demo</h3>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>{data.map((d, i) => <li key={i}>{d}</li>)}</ul>
    </div>
  );
}
