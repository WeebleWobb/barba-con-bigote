import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonVariant = 'primary' | 'spotify'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-orange hover:bg-red',
  spotify: 'bg-spotify-green hover:bg-spotify-green/90 rounded-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonVariant
}

export default function Button({ children, className, variant = 'primary', ...props }: Readonly<ButtonProps>) {
  return (
    <button
      className={twMerge(
        'text-white px-4 py-2 rounded-md transition-colors ease-in-out duration-250 hover:cursor-pointer',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
