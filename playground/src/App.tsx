import { useCallback, useState } from 'react'

import EmojiPicker from 'rc-emoji-picker'

import 'rc-emoji-picker/style.css'

function App() {
  const [emoji, setEmoji] = useState('')

  return (
    <div
      className="p-[24px] flex flex-col w-full max-w-screen-lg gap-[24px] mx-[auto] my-0"
      style={{
        maxWidth: 1024,
        margin: '40px auto',
      }}
    >
      <EmojiPicker
        onChange={(v: any) => {
          setEmoji(v)
        }}
      >
        <button type="button" className="flex items-center gap-[5px] max-w-[120px] rounded-sm p-[4px] bg-[black] text-white">
          Select Emoji
          <span>{emoji}</span>
        </button>
      </EmojiPicker>
    </div>
  )
}

export default App
