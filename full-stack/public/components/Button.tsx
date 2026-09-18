import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'glass' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
}

const VARIANTS: Record<Variant, string> = {
	primary:
		'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_25px_rgba(168,85,247,0.45)] hover:brightness-110',
	glass: 'border border-white/10 bg-white/[0.07] text-zinc-200 hover:bg-white/[0.14]',
	ghost: 'text-zinc-400 hover:bg-white/10 hover:text-zinc-200',
};

export default function Button({ variant = 'primary', className = '', ...rest }: Props) {
	return (
		<button
			{...rest}
			className={`inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
		/>
	);
}
