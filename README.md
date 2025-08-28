# Updater proyect

A simple JavaScript utility to check for version updates from any URL endpoint.

## Description

This project provides a function that compares your current project version with the latest version available from a remote URL (such as GitHub API or your own server). It returns information about available updates.

## Features

- Check for version updates from any URL endpoint
- Works with GitHub API releases
- Compatible with custom server endpoints
- Returns version information and release data
- Simple async/await implementation

## Usage

```javascript
import updaterFromURL from './index.js';

// Check for updates using GitHub API
const check = await updaterFromURL('https://api.github.com/repos/USERNAME/REPOSITORY/releases/latest', '1.0.0');

if (check) {
    console.log('Update available!');
    console.log('New version:', check[0]); // Boolean indicating update available
    console.log('Version name:', check[1]); // Release name
    console.log('Full data:', check[2]);    // Complete response data
} else {
    console.log('No updates available');
}
```

## Function Parameters

- `url` (string): URL endpoint that returns version information in JSON format
- `versionActual` (string): Your current project version

## Return Value

- Returns `null` if no update is available
- Returns an array `[boolean, string, object]` if update is available:
  - `[0]`: Boolean indicating if version is different
  - `[1]`: Name/title of the new version
  - `[2]`: Complete JSON response from the URL

## Requirements

- Node.js with ES6 modules support
- Internet connection to fetch remote version data

## Installation

1. Clone or download this project
2. Run `npm start` to test the example

## API Response Format

Your endpoint should return JSON with at least these fields:
```json
{
  "version": "1.1.0",
  "name": "Release Name",
  "...": "other data"
}
```

## License

ISC