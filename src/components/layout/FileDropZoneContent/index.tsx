import { IoCloudUploadOutline } from 'react-icons/io5'

export const FileDropZoneContent = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <IoCloudUploadOutline size={58} className="text-purple-light" />
      <p className="text-center text-gray text-2xl">
        Solte o arquvio para fazer a{' '}
        <span className="text-purple-light">conversão</span>
      </p>
    </div>
  )
}
