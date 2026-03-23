#!/bin/bash
# ═══════════════════════════════════════════════════════════
#  Galaxy Cycle Rush — Auto Setup Script
#  Run this script to set up the entire project automatically
#  Usage: bash setup.sh
# ═══════════════════════════════════════════════════════════

set -e
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${CYAN}"
echo "🌌 GALAXY CYCLE RUSH — AUTO SETUP"
echo "==================================="
echo -e "${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
  echo -e "${YELLOW}⚠️  Node.js not found. Please install from: https://nodejs.org${NC}"
  exit 1
fi
echo -e "${GREEN}✅ Node.js $(node --version) found${NC}"

# Install Expo CLI
echo -e "\n${CYAN}📦 Installing Expo CLI...${NC}"
npm install -g @expo/cli eas-cli 2>/dev/null
echo -e "${GREEN}✅ Expo CLI installed${NC}"

# Create project
echo -e "\n${CYAN}🚀 Creating Expo project...${NC}"
npx create-expo-app galaxy-cycle-rush --template blank
cd galaxy-cycle-rush

# Install dependencies
echo -e "\n${CYAN}📦 Installing dependencies...${NC}"
npx expo install \
  expo-status-bar \
  expo-splash-screen \
  expo-av \
  expo-haptics \
  expo-linear-gradient \
  expo-font \
  react-native-svg \
  @react-native-async-storage/async-storage

echo -e "${GREEN}✅ Dependencies installed${NC}"

# Create src directory
mkdir -p src assets

# Create placeholder assets
echo -e "\n${CYAN}🎨 Creating placeholder assets...${NC}"
# Create a simple 1x1 pixel PNG placeholder using base64
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" | base64 -d > assets/icon.png 2>/dev/null || echo "" > assets/icon.png
cp assets/icon.png assets/adaptive-icon.png
cp assets/icon.png assets/splash.png
cp assets/icon.png assets/favicon.png
echo -e "${YELLOW}⚠️  Replace placeholder images in assets/ with your real icons${NC}"

echo -e "\n${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║  ✅ SETUP COMPLETE!                    ║"
echo "╠════════════════════════════════════════╣"
echo "║                                        ║"
echo "║  NEXT STEPS:                           ║"
echo "║  1. cd galaxy-cycle-rush               ║"
echo "║  2. Copy GalaxyCycleRush.js → src/     ║"
echo "║  3. Copy App.js → root                 ║"
echo "║  4. Replace icons in assets/           ║"
echo "║  5. npx expo start                     ║"
echo "║  6. Scan QR with Expo Go app           ║"
echo "║                                        ║"
echo "║  BUILD APK:                            ║"
echo "║  eas build -p android --profile apk    ║"
echo "║                                        ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"
