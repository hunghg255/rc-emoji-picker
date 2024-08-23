'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'rc-emoji-picker-inline-flex rc-emoji-picker-items-center rc-emoji-picker-justify-center rc-emoji-picker-rounded-md rc-emoji-picker-bg-muted rc-emoji-picker-p-1 rc-emoji-picker-text-muted-foreground',
      className,
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'rc-emoji-picker-inline-flex rc-emoji-picker-items-center rc-emoji-picker-justify-center rc-emoji-picker-whitespace-nowrap rc-emoji-picker-rounded-sm rc-emoji-picker-px-3 rc-emoji-picker-py-1.5 rc-emoji-picker-text-sm rc-emoji-picker-font-medium rc-emoji-picker-ring-offset-background rc-emoji-picker-transition-all focus-visible:rc-emoji-picker-outline-none focus-visible:rc-emoji-picker-ring-2 focus-visible:rc-emoji-picker-ring-ring focus-visible:rc-emoji-picker-ring-offset-2 disabled:rc-emoji-picker-pointer-events-none disabled:rc-emoji-picker-opacity-50 data-[state=active]:rc-emoji-picker-bg-background data-[state=active]:rc-emoji-picker-text-foreground data-[state=active]:rc-emoji-picker-shadow-sm',
      className,
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'rc-emoji-picker-mt-2 rc-emoji-picker-ring-offset-background focus-visible:rc-emoji-picker-outline-none focus-visible:rc-emoji-picker-ring-2 focus-visible:rc-emoji-picker-ring-ring focus-visible:rc-emoji-picker-ring-offset-2',
      className,
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
