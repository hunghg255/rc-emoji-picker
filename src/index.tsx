import type React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { ACTIVITIES, ANIMALS, EXPRESSIONES, FLAGS, FOODS, OBJECTS, SYMBOLS, TRAVELS } from './constants'
import Activity from '@/components/icons/Activity'
import Animal from '@/components/icons/Animas'
import Flag from '@/components/icons/Flag'
import Food from '@/components/icons/Food'
import Object from '@/components/icons/Object'
import Symbol from '@/components/icons/Symbol'
import Travel from '@/components/icons/Travel'
import { createKeysLocalStorageLRUCache } from '@/utils/lru-cache'
import { Popover, PopoverContent, PopoverTrigger, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import IconSmile from '@/components/icons/IconSmile'
import IconTime from '@/components/icons/IconTime'

import './styles/index.scss'

const emojiLocalStorageLRUCache = createKeysLocalStorageLRUCache('EMOJI_PICKER', 20)

const LIST = [
  {
    title: 'Smileys & People',
    data: EXPRESSIONES,
    icon: IconSmile,
  },
  {
    title: 'Animals & Nature',
    data: ANIMALS,
    icon: Animal,
  },
  {
    title: 'Food & Drink',
    data: FOODS,
    icon: Food,
  },
  {
    title: 'Activity',
    data: ACTIVITIES,
    icon: Activity,
  },
  {
    title: 'Travel & Places',
    data: TRAVELS,
    icon: Travel,
  },
  {
    title: 'Object',
    data: OBJECTS,
    icon: Object,
  },
  {
    title: 'Symbol',
    data: SYMBOLS,
    icon: Symbol,
  },
  {
    title: 'Flags',
    data: FLAGS,
    icon: Flag,
  },
]

const RECENT_DEFAULT = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣']

interface IProps {
  onChange: (arg: string) => void
  children: React.ReactNode
}

function EmojiPicker({ onChange, children }: IProps) {
  const [recentUsed, setRecentUsed] = useState<string[]>([])
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const renderedList = useMemo(
    () => (recentUsed.length
      ? [{ title: 'Frequently used', icon: IconTime, data: recentUsed }, ...LIST]
      : LIST),
    [recentUsed],
  )

  const selectEmoji = useCallback(
    (emoji: any) => {
      emojiLocalStorageLRUCache.put(emoji)
      setRecentUsed(emojiLocalStorageLRUCache.get() as string[])
      setIsPopoverOpen(false)
      if (onChange)
        onChange(emoji)
    },
    [onChange],
  )

  useEffect(() => {
    emojiLocalStorageLRUCache.syncFromStorage()
    const defaultEmoji = emojiLocalStorageLRUCache.get() as string[]

    if (!defaultEmoji?.length) {
      RECENT_DEFAULT.forEach((emoji) => {
        emojiLocalStorageLRUCache.put(emoji)
      })
    }

    const defaultEmojiNew = emojiLocalStorageLRUCache.get() as string[]
    setRecentUsed(defaultEmojiNew)
  }, [])

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={setIsPopoverOpen}
    >
      <PopoverTrigger
        onClick={() => setIsPopoverOpen(true)}
        asChild
      >
        {children}
      </PopoverTrigger>

      <PopoverContent
        hideWhenDetached
        className="rc-emoji-picker-p-1 rc-emoji-picker-bg-white"
        align="start"
        side="bottom"
      >
        <Tabs defaultValue="Frequently used">
          <TabsList className="tablistEmoji rc-emoji-picker-flex rc-emoji-picker-items-center">
            {renderedList.map((list) => {
              return (
                <TabsTrigger
                  key={list.title}
                  value={list.title}
                >
                  {list.icon && <list.icon />}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {renderedList.map((list) => {
            return (
              <TabsContent
                key={list.title}
                value={list.title}
                className="tabContentEmoji"
              >
                <p>{list.title}</p>

                <div className="rc-emoji-picker-max-h-[280px] rc-emoji-picker-overflow-y-auto tabContentEmojiScroll">
                  <div className="rc-emoji-picker-grid rc-emoji-picker-grid-cols-8">
                    {(list.data || []).map(ex => (
                      <div
                        key={ex}
                        onClick={() => selectEmoji(ex)}
                        className="rc-emoji-picker-text-center rc-emoji-picker-cursor-pointer tabItemEmoji"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}

EmojiPicker.displayName = EmojiPicker.name

export default EmojiPicker
