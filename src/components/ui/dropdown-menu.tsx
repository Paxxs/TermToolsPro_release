import * as React from "react"
import { Menu } from "@base-ui/react/menu"
import { cn } from "@/lib/utils"

const DropdownMenu = Menu.Root

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Menu.Trigger> & { asChild?: boolean }
>(({ asChild, children, ...props }, ref) => {
  if (asChild && React.isValidElement(children)) {
    return (
      <Menu.Trigger ref={ref} render={children as React.ReactElement} {...props} />
    )
  }
  return (
    <Menu.Trigger ref={ref} {...props}>
      {children}
    </Menu.Trigger>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Menu.Popup> & {
    align?: "start" | "center" | "end"
    sideOffset?: number
  }
>(({ className, align = "center", sideOffset = 8, ...props }, ref) => (
  <Menu.Portal>
    <Menu.Positioner align={align} side="bottom" sideOffset={sideOffset} className="z-50">
      <Menu.Popup
        ref={ref}
        className={cn(
          "min-w-[8rem] origin-[var(--transform-origin)] overflow-hidden rounded-md border border-[var(--border)] bg-[var(--header-bg)] p-1 shadow-md backdrop-blur-lg outline-none",
          className
        )}
        {...props}
      />
    </Menu.Positioner>
  </Menu.Portal>
))
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Menu.Item>
>(({ className, ...props }, ref) => (
  <Menu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm text-[var(--sea-ink)] transition-colors outline-none select-none data-[highlighted]:bg-[var(--link-bg-hover)] hover:bg-[var(--link-bg-hover)]",
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
