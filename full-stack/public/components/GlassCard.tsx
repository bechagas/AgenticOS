import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
	testId?: string;
}

export default function GlassCard({ children, className = '', testId }: Props) {
	return (
		<div
			data-testid={testId}
			className={`rounded-3xl border border-white/10 bg-white/6 shadow-[0_8px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl ${className}`}
		>
			{children}
		</div>
	);
}
