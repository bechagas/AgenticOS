interface Props {
	letter: string;
	gradient: string;
	size?: 'md' | 'lg';
}

export default function Avatar({ letter, gradient, size = 'md' }: Props) {
	const sizeCls = size === 'lg' ? 'h-14 w-14 text-2xl' : 'h-11 w-11 text-lg';
	return (
		<div
			aria-hidden
			className={`flex shrink-0 items-center justify-center rounded-2xl bg-linear-to-br font-bold text-white ${gradient} ${sizeCls}`}
		>
			{letter}
		</div>
	);
}
