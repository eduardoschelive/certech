import { LabeledIcon } from '@/components/ui/LabeledIcon'
import { useFileContext } from '@/contexts/FileContext/useFileContext'
import { MouseEvent } from 'react'
import {
  IoCloseCircle,
  IoCloudUploadOutline,
  IoDocumentText,
} from 'react-icons/io5'

export const FileDropZoneIcon = () => {
  const { files, status, setFiles } = useFileContext()

  if (status === 'empty') {
    return (
      <div>
        <IoCloudUploadOutline size={58} className="text-purple-light" />
      </div>
    )
  }

  const onClickInFile = (
    event: MouseEvent<HTMLButtonElement>,
    index: number,
  ) => {
    event.stopPropagation()
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
  }

  return (
    <div className="flex gap-4">
      {files.map((file, index) => (
        <div key={index} className="flex flex-col items-end">
          <button
            className="relative top-4 right-2"
            onClick={(event) => onClickInFile(event, index)}
          >
            <IoCloseCircle
              size={24}
              className="text-red-400 hover:text-red-500"
            />
          </button>
          <LabeledIcon
            label={file.name}
            icon={<IoDocumentText size={48} className="text-purple-light" />}
          />
        </div>
      ))}
    </div>
  )
}
