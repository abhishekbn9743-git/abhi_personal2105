@echo off
echo ========================================
echo   Cuteness Test App - Setup Script
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo Node.js is installed!
node --version
echo.

echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed!
    pause
    exit /b 1
)

echo npm is installed!
npm --version
echo.

echo Installing dependencies...
echo This may take a few minutes...
echo.

call npm install

if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Installation Complete!
echo ========================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open your browser to:
echo   http://localhost:3000
echo.
echo ========================================
pause
