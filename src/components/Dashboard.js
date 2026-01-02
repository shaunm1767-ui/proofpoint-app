import FirebaseDemo from "./FirebaseDemo";

<FirebaseDemo />
import PublicLegitimacyCheck from "./PublicLegitimacyCheck";

<PublicLegitimacyCheck />
import StolenDeviceReport from "./StolenDeviceReport";
import React from "react";
import DeviceCard from "./DeviceCard";
import InvoiceUpload from "./InvoiceUpload";

export default function Dashboard() {
  return (
    <div>
      <h1>ProofPoint Dashboard</h1>
      <DeviceCard deviceName="iPhone 15" serial="12345XYZ" />
      <InvoiceUpload />
    </div>
  );
}
