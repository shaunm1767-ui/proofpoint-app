import React from "react";

export default function InvoiceUpload() {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}>
      <h3>Invoice Upload</h3>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
