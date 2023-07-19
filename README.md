# Copy to clipboard

Simply copies a string to clipboard

[![License](https://img.shields.io/npm/l/copy2clip.svg)](https://www.npmjs.com/package/copy2clip)
[![NPM Version](https://img.shields.io/npm/v/copy2clip.svg)](https://www.npmjs.com/package/copy2clip)
[![Known Vulnerabilities](https://snyk.io/test/github/marshallku/react-postscribe/badge.svg)](https://snyk.io/test/github/marshallku/copy2clip)
[![NPM Downloads](https://img.shields.io/npm/dm/copy2clip.svg)](https://www.npmjs.com/package/copy2clip)

## Install

```bash
# npm
npm i copy2clip
# yarn
yarn add copy2clip
# pnpm
pnpm i copy2clip
```

## Usage

```ts
import { copyToClipboard } from "copy2clip";

copyToClipboard("VALUE", () => {
    alert("Copied!");
});
```

## Parameters

| Property | Type       | required | Description            |
| -------- | ---------- | -------- | ---------------------- |
| value    | string     | true     | A string value to copy |
| callback | () => void | false    | Callback function      |
