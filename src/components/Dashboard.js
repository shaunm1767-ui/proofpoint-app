import React from "react";
import DeviceCard from "./DeviceCard";

export default function Dashboard() {
  return (
    <div>
      <h1>ProofPoint Dashboard</h1>
      <DeviceCard deviceName="iPhone 15" serial="12345XYZ" />
    </div>
  );
}
