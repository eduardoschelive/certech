import { useConversion } from '@/contexts/FileContext/useConversion'
import { useState } from 'react'
import { IoEye, IoEyeOff } from 'react-icons/io5'

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { password, setPassword } = useConversion()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative float-label-input w-2/3 left-3">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          placeholder=" "
          value={password}
          onChange={handleChange}
          className="w-full bg-white focus:outline-none focus:shadow-outline border py-3 px-3 block appearance-none leading-normal border-purple focus:border-purple-light"
        />
        <label
          htmlFor="password"
          className="absolute top-3 left-0 text-gray-400 pointer-events-none transition duration-200 ease-in-outbg-white px-2 text-gray text-lg"
        >
          Senha do certificado
        </label>
      </div>
      <button
        className="relative -left-8 opacity-60 hover:opacity-100 transition duration-200 ease-in-out text-gray z-10"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <IoEyeOff size={24} /> : <IoEye size={24} />}
      </button>
    </div>
  )
}
