document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("testBtn");
  const clearBtn = document.getElementById("clearBtn");
  const proofText = document.getElementById("proofText");
  const historyDiv = document.getElementById("proofHistory");
  const spinner = document.getElementById("spinner");

  if (!submitBtn || !clearBtn || !proofText || !historyDiv || !spinner) {
    console.error("Required DOM elements missing");
    return;
  }

  const API_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/proof"
      : "http://10.0.2.2:3000/proof";

  function showSpinner(show) {
    spinner.style.display = show ? "block" : "none";
    submitBtn.disabled = show;
    clearBtn.disabled = show;
    proofText.disabled = show;
  }

  function renderHistory(proofs) {
    historyDiv.innerHTML = "";
    if (!proofs || proofs.length === 0) {
      historyDiv.innerHTML = "<p><em>No proofs yet.</em></p>";
      return;
    }
    proofs.forEach(p => {
      const row = document.createElement("div");
      row.textContent = `[${new Date(p.timestamp).toLocaleString()}] ${p.text}`;
      historyDiv.appendChild(row);
    });
  }

  async function loadHistory() {
    showSpinner(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      renderHistory(data.proofs);
    } catch (err) {
      console.error("Failed to load history:", err);
      historyDiv.innerHTML = "<p>Error loading history.</p>";
    } finally {
      showSpinner(false);
    }
  }

  submitBtn.addEventListener("click", async () => {
    const text = proofText.value.trim();
    if (!text) return alert("Enter proof text");

    showSpinner(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await res.json();
      if (data.success) {
        alert(`Proof submitted ✅ ID: ${data.proof.id}`);
        proofText.value = "";
        await loadHistory();
      } else {
        alert("Submission failed");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error during submit");
    } finally {
      showSpinner(false);
    }
  });

  clearBtn.addEventListener("click", async () => {
    if (!confirm("Clear all proofs?")) return;

    showSpinner(true);
    try {
      const res = await fetch(API_URL, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        renderHistory([]);
        alert("History cleared ✅");
      } else {
        alert("Clear failed");
      }
    } catch (err) {
      console.error("Clear error:", err);
      alert("Network error during clear");
    } finally {
      showSpinner(false);
    }
  });

  loadHistory();
});
