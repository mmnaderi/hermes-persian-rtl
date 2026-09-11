#!/usr/bin/env bash
# Bash Installation Script for Hermes Agent Desktop Persian RTL & Typography Plugin
# Project: Hermes Persian RTL
# Dedicated to the memory of Saber Rastikerdar (creator of Vazirmatn font)

set -e

echo -e "\033[36m==========================================================\033[0m"
echo -e "\033[33m    Hermes Agent Desktop - Persian Typography & RTL Setup  \033[0m"
echo -e "\033[36m==========================================================\033[0m"
echo -e "\033[32m  In memory of Saber Rastikerdar                          \033[0m"
echo -e "\033[36m==========================================================\033[0m"
echo ""

HERMES_DIR="${HERMES_HOME:-$HOME/.hermes}"
PLUGIN_DIR="$HERMES_DIR/desktop-plugins/persian-font"

mkdir -p "$PLUGIN_DIR"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd)"
SOURCE_PLUGIN="$SCRIPT_DIR/plugin.js"
TARGET_PLUGIN="$PLUGIN_DIR/plugin.js"

if [ -f "$SOURCE_PLUGIN" ]; then
    cp "$SOURCE_PLUGIN" "$TARGET_PLUGIN"
else
    echo -e "\033[33mDownloading plugin.js from GitHub...\033[0m"
    curl -fsSL https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/plugin.js -o "$TARGET_PLUGIN"
fi

echo ""
echo -e "\033[32m✔ Plugin installed successfully at:\033[0m"
echo -e "\033[36m  $TARGET_PLUGIN\033[0m"
echo ""
echo -e "\033[33mTo activate:\033[0m"
echo "1. In Hermes Desktop, press [Cmd + K] or [Ctrl + K]."
echo "2. Select 'Reload desktop plugins' (or restart the app)."
echo ""
echo -e "\033[32mDone! Enjoy Persian font & smart RTL in Hermes Agent Desktop 🚀\033[0m"
