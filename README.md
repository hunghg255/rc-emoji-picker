<p align="center">
<a href="https://www.npmjs.com/package/rc-emoji-picker" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/material-symbols:emoji-language.svg?color=%23ffed7a" alt="logo" width='100'/></a>
</p>

<p align="center">
  React Emoji Picker
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/rc-emoji-picker" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/rc-emoji-picker.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/rc-emoji-picker" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/rc-emoji-picker.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=rc-emoji-picker" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/rc-emoji-picker" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/rc-emoji-picker/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/rc-emoji-picker/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/rc-emoji-picker" alt="License" /></a>
</p>

## Demo

[Demo](https://rc-emoji-picker-playground.vercel.app/)

## Install

```bash
npm install rc-emoji-picker
```

## Usage

```jsx
import EmojiPicker from 'rc-emoji-picker'

import 'rc-emoji-picker/style.css'

function App() {
  const [emoji, setEmoji] = useState('')

  return (
    <EmojiPicker
      onChange={(v: any) => {
        setEmoji(v)
      }}
    >
      <button type="button">
        Select Emoji
        <span>{emoji}</span>
      </button>
    </EmojiPicker>
  )
}
```

## Run Locally

Clone the project

```bash
git clone https://github.com/hunghg255/rc-emoji-picker.git
```

Go to the project directory

```bash
cd rc-emoji-picker
```

Install dependencies

```bash
pnpm install
```

Start the Demo server

```bash
npm run build:lib:dev
npm run playground
```

## All Contributors

Thanks to the following friends for their contributions to project:

<a href="https://github.com/hunghg255/rc-emoji-picker/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hunghg255/rc-emoji-picker" alt="contributors">
</a>

## License

[MIT](./LICENSE)
