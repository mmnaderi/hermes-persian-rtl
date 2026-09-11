# PowerShell Installation Script for Hermes Agent Desktop Persian RTL & Typography Plugin
# Project: Hermes Persian RTL
# Dedicated to the memory of Saber Rastikerdar (creator of Vazirmatn font)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "    Hermes Agent Desktop - Persian Typography & RTL Setup  " -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  In memory of Saber Rastikerdar                          " -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

# Determine Hermes Home
$HermesHome = $env:HERMES_HOME
if (-not $HermesHome -or -not (Test-Path $HermesHome)) {
    $HermesHome = "$env:LOCALAPPDATA\hermes"
    if (-not (Test-Path $HermesHome)) {
        $HermesHome = "$HOME\.hermes"
    }
}

$PluginDir = Join-Path $HermesHome "desktop-plugins\persian-font"
if (-not (Test-Path $PluginDir)) {
    Write-Host "Creating plugin directory: $PluginDir" -ForegroundColor Gray
    New-Item -Path $PluginDir -ItemType Directory -Force | Out-Null
}

$CurrentScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$SourcePlugin = Join-Path $CurrentScriptDir "plugin.js"
$TargetPlugin = Join-Path $PluginDir "plugin.js"

if (Test-Path $SourcePlugin) {
    Copy-Item -Path $SourcePlugin -Destination $TargetPlugin -Force
} else {
    # Fallback to downloading raw file if executed via web curl/iwr
    Write-Host "Downloading plugin.js from GitHub..." -ForegroundColor Yellow
    $RawUrl = "https://raw.githubusercontent.com/Abulfadl-Ahmadi/hermes-persian-rtl/main/plugin.js"
    Invoke-WebRequest -Uri $RawUrl -OutFile $TargetPlugin
}

Write-Host ""
Write-Host "✔ Plugin installed successfully at:" -ForegroundColor Green
Write-Host "  $TargetPlugin" -ForegroundColor Cyan
Write-Host ""
Write-Host "To activate:" -ForegroundColor Yellow
Write-Host "1. In Hermes Desktop, press [Ctrl + K] (or [Ctrl + Shift + P])."
Write-Host "2. Search for and click 'Reload desktop plugins' (or restart the app)."
Write-Host ""
Write-Host "Done! Enjoy Persian font & smart RTL in Hermes Agent Desktop 🚀" -ForegroundColor Green
