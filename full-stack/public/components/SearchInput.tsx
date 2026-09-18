interface Props {
	value: string;
	onChange: (v: string) => void;
	placeholder?: string;
	testId?: string;
}

export default function SearchInput({ value, onChange, placeholder, testId }: Props) {
	return (
		<div className="relative w-full">
			<span aria-hidden className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-zinc-500">
				⌕
			</span>
			<input
				data-testid={testId}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={placeholder ?? 'Search agents…'}
				className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pr-4 pl-11 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/30 focus:outline-none"
			/>
		</div>
	);
}
