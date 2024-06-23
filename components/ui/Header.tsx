import { useAppContext } from "@/hooks/useAppContext"
import Icon from "../icons"

export default function Header() {
  const { showMenu, toggleMenu } = useAppContext()

  return (
    <div className="max-w-7xl lg:w-full lg:max-w-full m-auto sticky top-0 min-h-16 flex items-center justify-between">
      {/* hamburger menu */}
      <div
        className={`w-8 h-3 relative rounded-sm hover:cursor-pointer before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-[--secondary-black] before:top-[1px] after:absolute after:content-[''] after:w-2/3 after:h-[3px] after:bg-[--secondary-black] after:rounded-sm before:rounded-sm after:bottom-0 before:ease-in-out before:duration-300 after:ease-in-out after:duration-300 after:delay-75 md:hidden ${
          showMenu
            ? `before:translate-x-3 after:translate-x-2 before:opacity-0 after:opacity-0`
            : `after:translate-x-0 before:translate-x-0 before:opacity-1 after:opacity-1`
        }`}
        onClick={toggleMenu}
      />

      {/* header controls */}
      <div className="center gap-x-3 md:w-full md:justify-end">
        {/* search control */}
        <div className="w-9 h-9 center rounded-full hover:cursor-pointer">
          <Icon name="search" className="h-7 w-7 opacity-95" />
        </div>
        {/* notification control */}
        <div className="w-9 h-9 center rounded-full hover:cursor-pointer">
          <Icon name="bell" className="h-7 w-7" />
        </div>
        {/* profile control */}
        <div className="w-9 h-9 rounded-full hover:cursor-pointer bg-slate-600" />
      </div>
    </div>
  )
}
