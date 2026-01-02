import React from "react";

export default function DeviceCard({ deviceName, serial }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>{deviceName}</h3>
      <p>Serial: {serial}</p>
    </div>
  );
}
