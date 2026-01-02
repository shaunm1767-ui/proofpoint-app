# ProofPoint launch script
# Save as launch-proofpoint.ps1 in C:\Users\Shaun\Desktop\proofpoint-web

# --- Step 0: Define paths ---
$projectPath = "C:\Users\Shaun\Desktop\proofpoint-web"
$wwwPath = "$projectPath\www"

# --- Step 1: Start backend in new PowerShell ---
Start-Process powershell -ArgumentList "-NoExit", "-Command cd `"$projectPath`"; node server.js" -WindowStyle Normal

# --- Step 2: Start frontend server in new PowerShell ---
Start-Process powershell -ArgumentList "-NoExit", "-Command cd `"$wwwPath`"; npx http-server -p 8080" -WindowStyle Normal

# --- Step 3: Display access info ---
Write-Host "-------------------------------"
Write-Host "✅ ProofPoint Backend running at http://localhost:3000"
Write-Host "✅ ProofPoint Frontend running at http://10.0.2.2:8080 (Emulator) or http://localhost:8080 (Browser)"
Write-Host "-------------------------------"
