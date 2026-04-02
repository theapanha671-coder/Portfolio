#!/bin/bash

# Portfolio Project Setup Verification Script
# This script verifies that all required files and dependencies are in place

echo "🔍 Portfolio Website Setup Verification"
echo "========================================"
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check file existence
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        return 0
    else
        echo -e "${RED}✗${NC} $1 (missing)"
        return 1
    fi
}

# Function to check directory existence
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
        return 0
    else
        echo -e "${RED}✗${NC} $1/ (missing)"
        return 1
    fi
}

# Frontend Checks
echo "Frontend Files:"
echo "----"
check_dir "frontend/src"
check_dir "frontend/src/components"
check_dir "frontend/src/pages"
check_file "frontend/package.json"
check_file "frontend/index.html"
check_file "frontend/tailwind.config.js"
check_file "frontend/src/App.jsx"
check_file "frontend/src/components/Header.jsx"
check_file "frontend/src/components/About.jsx"
echo ""

# Backend Checks
echo "Backend Files:"
echo "----"
check_dir "backend"
check_dir "backend/models"
check_dir "backend/routes"
check_dir "backend/middleware"
check_file "backend/package.json"
check_file "backend/server.js"
check_file "backend/models/Contact.js"
check_file "backend/routes/contact.js"
echo ""

# Root Checks
echo "Root Project Files:"
echo "----"
check_file "README.md"
check_file "QUICKSTART.md"
check_file "package.json"
echo ""

# Environment File Checks
echo "Environment Files:"
echo "----"
if [ -f "frontend/.env" ]; then
    echo -e "${GREEN}✓${NC} frontend/.env"
else
    echo -e "${YELLOW}⚠${NC} frontend/.env (use .env.example to create)"
fi

if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✓${NC} backend/.env"
else
    echo -e "${YELLOW}⚠${NC} backend/.env (use .env.example to create)"
fi
echo ""

# Node Modules Check
echo "Dependencies Installed:"
echo "----"
if [ -d "frontend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} Frontend dependencies installed"
else
    echo -e "${YELLOW}⚠${NC} Frontend dependencies not installed (run: cd frontend && npm install)"
fi

if [ -d "backend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} Backend dependencies installed"
else
    echo -e "${YELLOW}⚠${NC} Backend dependencies not installed (run: cd backend && npm install)"
fi
echo ""

echo "Setup Verification Complete!"
echo "========================================"
echo ""
echo "Next Steps:"
echo "1. Create frontend/.env from frontend/.env.example"
echo "2. Create backend/.env from backend/.env.example"
echo "3. Install dependencies: npm install in frontend/ and backend/"
echo "4. Start backend: cd backend && npm run dev"
echo "5. Start frontend: cd frontend && npm start"
