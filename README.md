# Hermes Agent Desktop — Persian Typography & RTL Plugin 🚀

[**نسخه فارسی راهنما (Persian Guide)**](./README-FA.md)

A lightweight, seamless Desktop Plugin for [Hermes Agent Desktop](https://github.com/NousResearch/hermes-agent) that adds beautiful Persian typography (Vazirmatn), clean English UI fonts (Inter), modern monospace code fonts (Geist Mono), and intelligent bidirectional / RTL (Right-to-Left) rendering.

---

## ✨ Features

- ✍️ **Persian Typography (Vazirmatn):** Crisp and clean rendering for all Persian text across chat messages, prompts, sidebars, buttons, and dialogues.
- 🔤 **English & Latin Support (Inter):** Beautiful typography for English text without glyph conflicts via native CSS font-fallback stacking.
- 💻 **Monospace & Code Blocks (Geist Mono):** Preserves LTR alignment, syntax highlighting, and coding readability with fallback to JetBrains Mono.
- 🔄 **Smart Direction & Bi-directional Detection:** Automatic Right-to-Left (RTL) alignment for Persian paragraphs while keeping English messages and code blocks Left-to-Right (LTR).
- 🧩 **Zero Core Patching:** Uses the official Hermes Desktop Plugin architecture (`~/.hermes/desktop-plugins/`), meaning updates to Hermes Agent won't overwrite your setup.

---

## ⚡ Quick Install

### Windows (PowerShell)
Open PowerShell and run:
```powershell
iwr -useb https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/install.ps1 | iex
```

### Linux / macOS (Bash)
Open terminal and run:
```bash
curl -fsSL https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/install.sh | bash
```

---

## 🛠️ Manual Installation

1. Create a folder named `persian-font` in your Hermes desktop plugins directory:
   - **Windows:** `%LOCALAPPDATA%\hermes\desktop-plugins\persian-font\` (or `~/.hermes/desktop-plugins/persian-font/`)
   - **Linux / macOS:** `~/.hermes/desktop-plugins/persian-font/`

2. Download `plugin.js` from this repository and place it in that folder.

3. In **Hermes Agent Desktop**, press <kbd>Ctrl</kbd> + <kbd>K</kbd> (or <kbd>Cmd</kbd> + <kbd>K</kbd>) and select **Reload desktop plugins** (or restart the app).

---

## 🎨 Font Hierarchy Stacks

| Purpose | Primary Font | Fallbacks |
| :--- | :--- | :--- |
| **UI & General Text** | `Inter` (for Latin) + `Vazirmatn` (for Persian) | `Segoe UI`, `-apple-system`, `sans-serif` |
| **Code & Monospace** | `Geist Mono` | `JetBrains Mono`, `Vazirmatn`, `monospace` |

---

## 📜 License & Credits

- Created by [Abulfadl Ahmadi](https://github.com/Abulfadl-Ahmadi).
- Dedicated to the memory of **Saber Rastikerdar**, creator of the wonderful [Vazirmatn](https://github.com/rastikerdar/vazirmatn) font.
- Distributed under the [MIT License](./LICENSE).
