type TypographyProps = {
  children: React.ReactNode
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}

export const Typography = ({ children, className, as }: TypographyProps) => {
  const Tag = as || 'p'

  return <Tag className={className}>{children}</Tag>
}
