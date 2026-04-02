@echo off
REM Portfolio Project Setup Verification Script for Windows

echo.
echo 🔍 Portfolio Website Setup Verification
echo ========================================
echo.

setlocal enabledelayedexpansion

REM Function to check file
echo Frontend Files:
echo ----

if exist "frontend\src" (echo ✓ frontend\src\) else (echo ✗ frontend\src\ ^(missing^))
if exist "frontend\src\components" (echo ✓ frontend\src\components\) else (echo ✗ frontend\src\components\ ^(missing^))
if exist "frontend\src\pages" (echo ✓ frontend\src\pages\) else (echo ✗ frontend\src\pages\ ^(missing^))
if exist "frontend\package.json" (echo ✓ frontend\package.json) else (echo ✗ frontend\package.json ^(missing^))
if exist "frontend\index.html" (echo ✓ frontend\index.html) else (echo ✗ frontend\index.html ^(missing^))
if exist "frontend\tailwind.config.js" (echo ✓ frontend\tailwind.config.js) else (echo ✗ frontend\tailwind.config.js ^(missing^))
if exist "frontend\src\App.jsx" (echo ✓ frontend\src\App.jsx) else (echo ✗ frontend\src\App.jsx ^(missing^))
echo.

echo Backend Files:
echo ----

if exist "backend" (echo ✓ backend\) else (echo ✗ backend\ ^(missing^))
if exist "backend\models" (echo ✓ backend\models\) else (echo ✗ backend\models\ ^(missing^))
if exist "backend\routes" (echo ✓ backend\routes\) else (echo ✗ backend\routes\ ^(missing^))
if exist "backend\middleware" (echo ✓ backend\middleware\) else (echo ✗ backend\middleware\ ^(missing^))
if exist "backend\package.json" (echo ✓ backend\package.json) else (echo ✗ backend\package.json ^(missing^))
if exist "backend\server.js" (echo ✓ backend\server.js) else (echo ✗ backend\server.js ^(missing^))
echo.

echo Root Project Files:
echo ----

if exist "README.md" (echo ✓ README.md) else (echo ✗ README.md ^(missing^))
if exist "QUICKSTART.md" (echo ✓ QUICKSTART.md) else (echo ✗ QUICKSTART.md ^(missing^))
if exist "package.json" (echo ✓ package.json) else (echo ✗ package.json ^(missing^))
echo.

echo Environment Files:
echo ----

if exist "frontend\.env" (
  echo ✓ frontend\.env
) else (
  echo ⚠ frontend\.env ^(use .env.example to create^)
)

if exist "backend\.env" (
  echo ✓ backend\.env
) else (
  echo ⚠ backend\.env ^(use .env.example to create^)
)
echo.

echo Dependencies Installed:
echo ----

if exist "frontend\node_modules" (
  echo ✓ Frontend dependencies installed
) else (
  echo ⚠ Frontend dependencies not installed
  echo    Run: cd frontend ^&^& npm install
)

if exist "backend\node_modules" (
  echo ✓ Backend dependencies installed
) else (
  echo ⚠ Backend dependencies not installed
  echo    Run: cd backend ^&^& npm install
)
echo.

echo Setup Verification Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Create frontend\.env from frontend\.env.example
echo 2. Create backend\.env from backend\.env.example
echo 3. Install dependencies: npm install in frontend\ and backend\
echo 4. Start backend: cd backend ^&^& npm run dev
echo 5. Start frontend: cd frontend ^&^& npm start
