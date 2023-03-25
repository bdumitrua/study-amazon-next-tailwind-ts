import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
}

const button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium px-10 py-2 shadow',
				{
					'text-white bg-primary': variant === 'orange',
					'text-primary bg-white': variant === 'white'
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default button
