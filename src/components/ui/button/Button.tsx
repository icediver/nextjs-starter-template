import clsx from 'clsx';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	variant?: 'primary' | 'secondary';
}

export function Button({ children, variant = 'primary', ...props }: IButton) {
	const { className, ...rest } = props;
	return (
		<button
			className={clsx(
				'rounded-[40px] px-[38px] py-4 text-xs font-bold uppercase transition-all duration-200 active:translate-y-1',
				className,
				{
					'bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] text-[#343045] hover:brightness-150':
						variant === 'primary',
					'border-2 border-white text-white hover:contrast-50':
						variant === 'secondary',
				}
			)}
			{...rest}
		>
			{children}
		</button>
	);
}
