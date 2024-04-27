import { useTheme } from 'next-themes'
import { IoMoon, IoSunny } from 'react-icons/io5'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="absolute right-4 top-4 z-50">
      <button
        className="p-2 rounded-md cursor-pointer text-purple-light hover:text-purple transition duration-200 ease-in-out"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <IoSunny size={24} /> : <IoMoon size={24} />}
      </button>
    </div>
  )
}
