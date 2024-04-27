type LabeledIconProps = {
  icon: React.ReactNode
  label: string
}

export const LabeledIcon = ({ icon, label }: LabeledIconProps) => {
  return (
    <div className="flex items-center flex-col justify-center text-center">
      {icon}
      <h6 className="text-mainText">{label}</h6>
    </div>
  )
}
