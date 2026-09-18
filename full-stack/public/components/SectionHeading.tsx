interface Props {
	eyebrow?: string;
	title: string;
	subtitle?: string;
	align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
	const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
	return (
		<div className={`max-w-2xl ${alignCls}`}>
			{eyebrow && (
				<p className="text-xs font-semibold tracking-[0.2em] text-violet-300/80 uppercase">
					{eyebrow}
				</p>
			)}
			<h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
			{subtitle && <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">{subtitle}</p>}
		</div>
	);
}
