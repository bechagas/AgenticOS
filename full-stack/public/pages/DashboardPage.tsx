import { ACTIVITY, AGENTS } from '../data/agents';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import GlassCard from '../components/GlassCard';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import UsageBars from '../components/UsageBars';

interface Props {
	onOpen: (id: string) => void;
	onTry: (id: string) => void;
}

const STATUS_TONE: Record<string, 'emerald' | 'amber' | 'rose'> = {
	success: 'emerald',
	running: 'amber',
	failed: 'rose',
};

export default function DashboardPage({ onOpen, onTry }: Props) {
	const recent = [...AGENTS].sort((a, b) => b.runs - a.runs).slice(0, 3);

	return (
		<div className="flex flex-col gap-6">
			<SectionHeading
				align="left"
				eyebrow="Dashboard"
				title="Workspace overview"
				subtitle="Mock analytics — wire this view to your Elysia endpoints when the backend is ready."
			/>
			<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
				<StatCard testId="stat-runs" label="Total runs" value="403k" delta="▲ 12% this week" />
				<StatCard testId="stat-agents" label="Active agents" value="8" delta="▲ 2 new" />
				<StatCard testId="stat-rating" label="Avg rating" value="4.8" delta="▲ 0.1 this month" />
				<StatCard testId="stat-tokens" label="Tokens used" value="18M" delta="▲ 8% this week" />
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				<GlassCard className="p-6 lg:col-span-2">
					<div className="flex items-center justify-between">
						<h2 className="font-bold text-white">Runs this week</h2>
						<Badge tone="emerald">● live mock</Badge>
					</div>
					<div className="mt-5">
						<UsageBars />
					</div>
				</GlassCard>
				<GlassCard className="p-6">
					<h2 className="font-bold text-white">Recent activity</h2>
					<ul className="mt-4 flex flex-col gap-3">
						{ACTIVITY.map((a) => (
							<li key={a.id} className="flex items-start gap-3">
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-current text-violet-300" aria-hidden />
								<div className="min-w-0">
									<p className="truncate text-sm font-semibold text-white">{a.agentName}</p>
									<p className="truncate text-xs text-zinc-400">{a.action}</p>
									<p className="mt-1 flex items-center gap-2 text-[11px] text-zinc-500">
										{a.time} <Badge tone={STATUS_TONE[a.status]}>{a.status}</Badge>
									</p>
								</div>
							</li>
						))}
					</ul>
				</GlassCard>
			</div>

			<GlassCard className="p-6">
				<div className="flex items-center justify-between">
					<h2 className="font-bold text-white">Top agents</h2>
				</div>
				<div className="mt-4 grid gap-3 md:grid-cols-3">
					{recent.map((a) => (
						<div key={a.id} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 p-3">
							<Avatar letter={a.avatar} gradient={a.gradient} />
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm font-semibold text-white">{a.name}</p>
								<p className="text-xs text-zinc-500">★ {a.rating.toFixed(1)} · {a.lastUsed}</p>
							</div>
							<div className="flex gap-1.5">
								<button
									onClick={() => onOpen(a.id)}
									className="h-8 rounded-lg border border-white/10 px-2.5 text-xs font-medium text-zinc-300 hover:bg-white/10"
								>
									Open
								</button>
								<button
									onClick={() => onTry(a.id)}
									className="h-8 rounded-lg bg-white/10 px-2.5 text-xs font-semibold text-white hover:bg-white/15"
								>
									Try
								</button>
							</div>
						</div>
					))}
				</div>
			</GlassCard>
		</div>
	);
}
