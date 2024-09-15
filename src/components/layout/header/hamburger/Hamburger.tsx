import clsx from 'clsx';

interface IHamburger {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Hamburger({ isOpen, setIsOpen }: IHamburger) {
	return (
		<div
			className={clsx(
				'relative z-50 h-[26px] w-[33px] flex-col lg:hidden [&>div]:bg-purple-300 [&>div]:transition-transform [&>div]:duration-500',
				{
					// ['top-[75px]']: isOpen,
				}
			)}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div
				className={clsx(
					'gradient absolute left-0 top-0 h-1 w-[33px] origin-top-left rounded',
					{
						['rotate-45']: isOpen,
					}
				)}
			/>
			<div
				className={clsx(
					'gradient absolute right-0 top-[11px] h-1 w-[26px] origin-left rounded',
					{ ['scale-0']: isOpen }
				)}
			/>
			<div
				className={clsx(
					'gradient absolute bottom-0 left-0 h-1 w-[33px] origin-bottom-left rounded',
					{
						['-rotate-45']: isOpen,
					}
				)}
			/>
		</div>
	);
}
