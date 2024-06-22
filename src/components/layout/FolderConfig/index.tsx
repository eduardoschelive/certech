import { getCertificateDirectory, selectCertificateDirectory } from "@/utils/folder"
import { useState } from "react"
import { IoFolderOpen } from "react-icons/io5"
import { Popover } from "react-tiny-popover"

export const FolderConfig = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen((prev) => !prev)
  const [value, setValue] = useState(getCertificateDirectory())

  const openButton = (
    <button className="p-2 rounded-md cursor-pointer text-purple-light hover:text-purple transition duration-200 ease-in-out" onClick={toggleOpen}>
      <IoFolderOpen size={24} />
    </button>
  )

  const selectFolder = async () => {
    const directory = await selectCertificateDirectory()
    setValue(directory)
  }


  return (
    <Popover
      isOpen={isOpen}
      positions={["bottom"]}
      padding={10}
      onClickOutside={() => setIsOpen(false)}
      transformMode="relative"
      transform={{ left: -36 }}
      containerClassName="z-50 mr-6"
      content={() => (
        <div className="p-2 bg-primary rounded-lg shadow-md">
          <div className="flex flex-col w-96 p-4">
            <label htmlFor="folder" className="text-xs text-mainText">Local para salvar os certificados</label>
            <div className="flex w-full">
              <input className="border-purple border-2 rounded-md p-1 w-full bg-[#F3E3F7] text-justify text-purple" id="folder" readOnly value={value} />
              <button className="p-2 rounded-md cursor-pointer text-purple-light hover:text-purple transition duration-200 ease-in-out relative z-10" onClick={selectFolder}>
                <IoFolderOpen size={24} />
              </button>
            </div>
           </div>
        </div>
      )}
    >
      {openButton}
    </Popover>
  )
}