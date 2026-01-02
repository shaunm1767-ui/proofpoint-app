# ---------------------------------------
# ProofPoint one-shot start script
# ---------------------------------------

# Set project folder
$ProjectFolder = "C:\Users\Shaun\Desktop\proofpoint-web"

# Move to project folder
cd $ProjectFolder

Write-Host "✅ In project folder: $ProjectFolder"

# Start backend
Write-Host "Starting ProofPoint backend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "node server.js"

# Wait 2 seconds to give backend time to start
Start-Sleep -Seconds 2

# Start frontend server on port 8080
Write-Host "Starting ProofPoint frontend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npx serve . -l 8080"

Write-Host "✅ Both frontend and backend started."
Write-Host "Open http://localhost:8080 in your browser"
