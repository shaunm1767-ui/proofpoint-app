const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "proofs.json");

app.use(cors());
app.use(express.json());

// ensure proofs.json exists
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf8");

// POST new proof
app.post("/proof", (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.json({ success: false, error: "No proof text provided" });

    const proofs = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const newProof = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      text,
      timestamp: Date.now()
    };
    proofs.push(newProof);
    fs.writeFileSync(DATA_FILE, JSON.stringify(proofs, null, 2), "utf8");

    console.log("Received proof:", newProof);
    res.json({ success: true, proof: newProof });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: "Internal server error" });
  }
});

// GET all proofs
app.get("/proof", (req, res) => {
  try {
    const proofs = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    res.json({ proofs });
  } catch {
    res.json({ proofs: [] });
  }
});

// DELETE all proofs
app.delete("/proof", (req, res) => {
  try {
    fs.writeFileSync(DATA_FILE, "[]", "utf8");
    res.sendStatus(200);
  } catch {
    res.sendStatus(500);
  }
});

app.listen(PORT, () => console.log(`✅ ProofPoint running on http://localhost:${PORT}`));
