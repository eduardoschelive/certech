import { useTheme } from 'next-themes'
import { IoMoon, IoSunny } from 'react-icons/io5'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="p-2 rounded-md cursor-pointer text-purple-light hover:text-purple transition duration-200 ease-in-out"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <IoSunny size={24} /> : <IoMoon size={24} />}
    </button>
  )
}
