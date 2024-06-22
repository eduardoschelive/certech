import { FolderConfig } from "../FolderConfig"
import { ThemeSwitcher } from "../ThemeSwitcher"

export const OptionButtons = () => {
  return (
    <div className="absolute right-4 top-4 z-50">
      <div className="flex align-middle justify-center">
        <FolderConfig />
        <ThemeSwitcher />
      </div>
    </div>
  )
}