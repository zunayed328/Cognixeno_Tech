interface GradientTextProps {
  children: React.ReactNode
  from?: string
  to?: string
  className?: string
}

export default function GradientText({
  children,
  from = '#C8A8E9',
  to = '#FF947A',
  className = '',
}: GradientTextProps) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </span>
  )
}
