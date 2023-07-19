# Copy to clipboard

Simply copies a string to clipboard

[![License](https://img.shields.io/npm/l/copytoclipboard.svg)](https://www.npmjs.com/package/copytoclipboard)
[![NPM Version](https://img.shields.io/npm/v/copytoclipboard.svg)](https://www.npmjs.com/package/copytoclipboard)
[![Known Vulnerabilities](https://snyk.io/test/github/marshallku/react-postscribe/badge.svg)](https://snyk.io/test/github/marshallku/copytoclipboard)
[![NPM Downloads](https://img.shields.io/npm/dm/copytoclipboard.svg)](https://www.npmjs.com/package/copytoclipboard)

## Install

```bash
# npm
npm i copytoclipboard
# yarn
yarn add copytoclipboard
# pnpm
pnpm i copytoclipboard
```

## Usage

```ts
import { copyToClipboard } from "copytoclipboard";

copyToClipboard("VALUE", () => {
    alert("Copied!");
});
```

## Parameters

| Property | Type       | required | Description            |
| -------- | ---------- | -------- | ---------------------- |
| value    | string     | true     | A string value to copy |
| callback | () => void | false    | Callback function      |
