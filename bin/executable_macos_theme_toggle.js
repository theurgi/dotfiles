#!/usr/bin/env node

const { exec } = require('child_process')

const dark = () => {
  // macOS
  const setMacOsAppearanceDark = `osascript -l JavaScript -e "Application('System Events').appearancePreferences.darkMode = true"`
  exec(setMacOsAppearanceDark)

  // kitty
  const setKittyDark = `kitty @ set-colors -a -c ~/.config/kitty/themes/purple_one_dark.conf`
  exec(setKittyDark)
}

const light = () => {
  // macOS
  const setMacOsAppearanceLight = `osascript -l JavaScript -e "Application('System Events').appearancePreferences.darkMode = false"`
  exec(setMacOsAppearanceLight)

  // kitty
  const setKittyLight = `kitty @ set-colors -a -c ~/.config/kitty/themes/purple_one_light.conf`
  exec(setKittyLight)
}

var args = process.argv.slice(2).map((arg) => arg.toLowerCase())

if (args.length !== 1 || (args[0] !== 'dark' && args[0] !== 'light')) {
  console.error(`This script requires one argument: 'dark' | 'light'`)
  process.exit(1)
} else args[0] === 'dark' ? dark() : light()
