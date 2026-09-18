import { WEEKLY_USAGE } from '../data/agents';

export default function UsageBars() {
	const max = Math.max(...WEEKLY_USAGE.map((d) => d.runs));
	return (
		<div className="flex h-40 items-end gap-2 sm:gap-3" role="img" aria-label="Agent runs per day this week">
			{WEEKLY_USAGE.map((d) => (
				<div key={d.day} className="flex flex-1 flex-col items-center gap-2">
					<div className="flex h-28 w-full items-end rounded-xl bg-white/4">
						<div
							className="w-full rounded-xl bg-linear-to-t from-violet-600/70 to-fuchsia-400/90 transition-all"
							style={{ height: `${Math.round((d.runs / max) * 100)}%` }}
							title={`${d.day}: ${d.runs} runs`}
						/>
					</div>
					<span className="text-[11px] font-medium text-zinc-500">{d.day}</span>
				</div>
			))}
		</div>
	);
}
