import type { Agent } from '../types';
import { formatRuns } from '../data/agents';
import Avatar from './Avatar';
import Badge from './Badge';
import GlassCard from './GlassCard';

interface Props {
	agent: Agent;
	onOpen: (id: string) => void;
	onTry: (id: string) => void;
}

export default function AgentCard({ agent, onOpen, onTry }: Props) {
	return (
		<GlassCard testId={`agent-card-${agent.id}`} className="flex flex-col p-5 transition hover:border-white/20 hover:bg-white/8">
			<div className="flex items-start gap-3">
				<Avatar letter={agent.avatar} gradient={agent.gradient} />
				<div className="min-w-0">
					<h3 className="truncate font-bold text-white">{agent.name}</h3>
					<p className="truncate text-sm text-zinc-400">{agent.tagline}</p>
				</div>
			</div>
			<div className="mt-4 flex flex-wrap gap-1.5">
				<Badge tone="violet">{agent.category}</Badge>
				<Badge tone="zinc">★ {agent.rating.toFixed(1)}</Badge>
				<Badge tone="cyan">{formatRuns(agent.runs)} runs</Badge>
			</div>
			<p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">{agent.description}</p>
			<div className="mt-5 flex gap-2">
				<button
					onClick={() => onOpen(agent.id)}
					className="h-10 flex-1 rounded-xl border border-white/10 bg-white/[0.07] text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.14] active:scale-[0.98]"
				>
					Details
				</button>
				<button
					onClick={() => onTry(agent.id)}
					className="h-10 flex-1 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
				>
					Try agent
				</button>
			</div>
		</GlassCard>
	);
}
