@echo off
echo ==============================================
echo  Starting FDE Academy Website...
echo ==============================================
echo.

if exist node_modules\.bin\vite.cmd (
    call npx vite --open
) else (
    start http://localhost:3000
    node server.js
)
pause
