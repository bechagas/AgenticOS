import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	tone?: 'violet' | 'emerald' | 'amber' | 'cyan' | 'zinc' | 'rose';
}

const TONES: Record<NonNullable<Props['tone']>, string> = {
	violet: 'border-violet-400/20 bg-violet-400/10 text-violet-200',
	emerald: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
	amber: 'border-amber-400/20 bg-amber-400/10 text-amber-300',
	cyan: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-200',
	zinc: 'border-white/10 bg-white/[0.07] text-zinc-300',
	rose: 'border-rose-400/20 bg-rose-400/10 text-rose-200',
};

export default function Badge({ children, tone = 'zinc' }: Props) {
	return (
		<span
			className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${TONES[tone]}`}
		>
			{children}
		</span>
	);
}
