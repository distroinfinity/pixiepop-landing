import classnames from 'clsx'

export function BackgroundGradient({ className }: { className?: string }) {
  return (
    <div
      className={classnames(
        'bg-gradient-to-b from-primary-00 to-primary-400',
        className
      )}
    />
  )
}
