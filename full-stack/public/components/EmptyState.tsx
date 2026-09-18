interface Props {
	title: string;
	hint?: string;
	actionLabel?: string;
	onAction?: () => void;
}

export default function EmptyState({ title, hint, actionLabel, onAction }: Props) {
	return (
		<div className="rounded-3xl border border-dashed border-white/15 bg-white/3 px-6 py-14 text-center">
			<p className="text-lg font-semibold text-white">{title}</p>
			{hint && <p className="mx-auto mt-2 max-w-sm text-sm text-zinc-400">{hint}</p>}
			{actionLabel && onAction && (
				<button
					onClick={onAction}
					className="mt-5 inline-flex h-10 items-center rounded-xl border border-white/10 bg-white/[0.07] px-4 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.14]"
				>
					{actionLabel}
				</button>
			)}
		</div>
	);
}
