import { useState } from 'react';
import { AGENTS, formatRuns, getAgent } from '../data/agents';
import Avatar from '../components/Avatar';
import Badge from '../components/Badge';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

interface Props {
	agentId: string;
	onBack: () => void;
	onTry: (id: string) => void;
}

type Tab = 'overview' | 'reviews';

const REVIEWS = [
	{ author: 'Maya R. · Ops Lead', text: 'Deployed in an afternoon. Ticket deflection jumped 38% in week one.' },
	{ author: 'Tom K. · Founder', text: 'Tone controls are excellent — customers cannot tell it is automated.' },
];

export default function AgentDetailPage({ agentId, onBack, onTry }: Props) {
	const agent = getAgent(agentId);
	const [tab, setTab] = useState<Tab>('overview');
	const related = AGENTS.filter((a) => a.category === agent.category && a.id !== agent.id).slice(0, 2);

	return (
		<div className="flex flex-col gap-6">
			<button onClick={onBack} className="w-fit text-sm font-medium text-zinc-400 transition hover:text-zinc-200">
				← Back to catalog
			</button>
			<GlassCard className="p-6 sm:p-8">
				<div className="flex flex-col gap-5 sm:flex-row sm:items-start">
					<Avatar letter={agent.avatar} gradient={agent.gradient} size="lg" />
					<div className="min-w-0 flex-1">
						<div className="flex flex-wrap items-center gap-2">
							<h1 className="text-2xl font-bold text-white sm:text-3xl">{agent.name}</h1>
							<Badge tone="violet">{agent.category}</Badge>
							<Badge tone="zinc">{agent.pricingTier}</Badge>
						</div>
						<p className="mt-1 text-sm text-zinc-400 sm:text-base">{agent.tagline}</p>
						<div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-400">
							<span>★ <strong className="text-white">{agent.rating.toFixed(1)}</strong> rating</span>
							<span><strong className="text-white">{formatRuns(agent.runs)}</strong> runs</span>
							<span>Active {agent.lastUsed}</span>
						</div>
						<div className="mt-5 flex flex-col gap-2 sm:flex-row">
							<Button onClick={() => onTry(agent.id)}>Open in playground →</Button>
							<Button variant="glass" onClick={onBack}>Browse more</Button>
						</div>
					</div>
				</div>
			</GlassCard>

			<div className="flex gap-2" role="tablist" aria-label="Agent details">
				{(['overview', 'reviews'] as Tab[]).map((t) => (
					<button
						key={t}
						role="tab"
						aria-selected={tab === t}
						onClick={() => setTab(t)}
						className={`h-10 rounded-xl px-4 text-sm font-medium capitalize transition ${
							tab === t ? 'bg-white/10 text-white' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
						}`}
					>
						{t}
					</button>
				))}
			</div>

			{tab === 'overview' ? (
				<div className="grid gap-4 lg:grid-cols-3">
					<GlassCard className="p-6 lg:col-span-2">
						<h2 className="font-bold text-white">About {agent.name}</h2>
						<p className="mt-2 text-sm leading-7 text-zinc-300">{agent.description}</p>
						<h3 className="mt-6 text-sm font-bold text-white">Capabilities</h3>
						<ul className="mt-3 grid gap-2 sm:grid-cols-2">
							{agent.capabilities.map((c) => (
								<li key={c} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2.5 text-sm text-zinc-200">
									<span aria-hidden className="text-emerald-300">✓</span> {c}
								</li>
							))}
						</ul>
					</GlassCard>
					<GlassCard className="p-6">
						<h3 className="text-sm font-bold text-white">More in {agent.category}</h3>
						<div className="mt-3 flex flex-col gap-2">
							{related.length === 0 && <p className="text-sm text-zinc-500">No related agents yet.</p>}
							{related.map((r) => (
								<div key={r.id} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 p-3">
									<Avatar letter={r.avatar} gradient={r.gradient} />
									<div className="min-w-0 flex-1">
										<p className="truncate text-sm font-semibold text-white">{r.name}</p>
										<p className="truncate text-xs text-zinc-500">{r.tagline}</p>
									</div>
								</div>
							))}
						</div>
					</GlassCard>
				</div>
			) : (
				<div className="grid gap-4 md:grid-cols-2">
					{REVIEWS.map((r) => (
						<GlassCard key={r.author} className="p-6">
							<p className="text-sm leading-7 text-zinc-300">“{r.text}”</p>
							<p className="mt-3 text-xs font-semibold text-zinc-500">{r.author}</p>
						</GlassCard>
					))}
				</div>
			)}
		</div>
	);
}
