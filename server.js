const express = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "www"))); // serve frontend

const PROOFS_FILE = path.join(__dirname, "proofs.json");

// Helper: read proofs.json
function readProofs() {
  try {
    const data = fs.readFileSync(PROOFS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Helper: write proofs.json
function writeProofs(proofs) {
  fs.writeFileSync(PROOFS_FILE, JSON.stringify(proofs, null, 2));
}

// GET /proof
app.get("/proof", (req, res) => {
  const proofs = readProofs();
  res.json({ proofs });
});

// POST /proof
app.post("/proof", (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === "") {
    return res.status(400).json({ success: false, error: "Empty proof" });
  }
  const proofs = readProofs();
  const proof = { id: uuidv4(), text: text.trim(), timestamp: Date.now() };
  proofs.push(proof);
  writeProofs(proofs);
  console.log(`Proof submitted: ${proof.id} → ${proof.text}`);
  res.json({ success: true, proof });
});

// DELETE /proof
app.delete("/proof", (req, res) => {
  writeProofs([]);
  console.log("All proofs cleared");
  res.json({ success: true });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ ProofPoint running at http://localhost:${PORT}`);
  console.log(`📱 Emulator access via http://10.0.2.2:${PORT}`);
});
