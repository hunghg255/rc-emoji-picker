'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'rc-emoji-picker-z-50 rc-emoji-picker-rounded-md !rc-emoji-picker-border rc-emoji-picker-bg-popover rc-emoji-picker-p-4 rc-emoji-picker-text-popover-foreground rc-emoji-picker-shadow-md rc-emoji-picker-outline-none data-[state=open]:rc-emoji-picker-animate-in data-[state=closed]:rc-emoji-picker-animate-out data-[state=closed]:rc-emoji-picker-fade-out-0 data-[state=open]:rc-emoji-picker-fade-in-0 data-[state=closed]:rc-emoji-picker-zoom-out-95 data-[state=open]:rc-emoji-picker-zoom-in-95 data-[side=bottom]:rc-emoji-picker-slide-in-from-top-2 data-[side=left]:rc-emoji-picker-slide-in-from-right-2 data-[side=right]:rc-emoji-picker-slide-in-from-left-2 data-[side=top]:rc-emoji-picker-slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }
