import type { ActivityItem, Agent, AgentCategory } from '../types';

export const CATEGORIES: Array<'All' | AgentCategory> = [
	'All',
	'Support',
	'Sales',
	'Code',
	'Research',
];

export const AGENTS: Agent[] = [
	{
		id: 'nova-support',
		name: 'Nova',
		tagline: 'Customer support autopilot',
		description:
			'Nova resolves tickets, drafts replies and escalates with full context. Trained on your help center and past conversations.',
		category: 'Support',
		rating: 4.9,
		runs: 128400,
		avatar: 'N',
		gradient: 'from-violet-500 to-fuchsia-500',
		capabilities: ['Ticket triage', 'Tone-aware replies', 'Escalation summaries', '24/7 coverage'],
		pricingTier: 'Pro',
		lastUsed: '2 min ago',
	},
	{
		id: 'pulse-sales',
		name: 'Pulse',
		tagline: 'Outbound SDR that never sleeps',
		description:
			'Pulse researches leads, personalizes outreach and books meetings straight into your calendar.',
		category: 'Sales',
		rating: 4.8,
		runs: 96400,
		avatar: 'P',
		gradient: 'from-cyan-500 to-blue-500',
		capabilities: ['Lead research', 'Personalized sequences', 'Meeting booking', 'CRM sync'],
		pricingTier: 'Pro',
		lastUsed: '18 min ago',
	},
	{
		id: 'forge-code',
		name: 'Forge',
		tagline: 'Senior pair-programmer',
		description:
			'Forge reviews PRs, writes tests and refactors with your repo conventions. Connects to GitHub in one click.',
		category: 'Code',
		rating: 4.9,
		runs: 210700,
		avatar: 'F',
		gradient: 'from-emerald-500 to-teal-500',
		capabilities: ['PR reviews', 'Test generation', 'Refactors', 'Docs from code'],
		pricingTier: 'Enterprise',
		lastUsed: '5 min ago',
	},
	{
		id: 'atlas-research',
		name: 'Atlas',
		tagline: 'Deep research in minutes',
		description:
			'Atlas scans sources, cites claims and compiles briefs your team can trust. Exports to Notion and PDF.',
		category: 'Research',
		rating: 4.7,
		runs: 58200,
		avatar: 'A',
		gradient: 'from-amber-500 to-orange-500',
		capabilities: ['Source scanning', 'Cited briefs', 'Competitor tracking', 'Notion export'],
		pricingTier: 'Starter',
		lastUsed: '1 h ago',
	},
	{
		id: 'echo-support',
		name: 'Echo',
		tagline: 'Voice & chat deflection',
		description:
			'Echo handles repetitive questions across chat, email and voice with graceful human handoff.',
		category: 'Support',
		rating: 4.6,
		runs: 74300,
		avatar: 'E',
		gradient: 'from-pink-500 to-rose-500',
		capabilities: ['FAQ deflection', 'Multilingual', 'Human handoff', 'CSAT tracking'],
		pricingTier: 'Starter',
		lastUsed: '3 h ago',
	},
	{
		id: 'ledger-sales',
		name: 'Ledger',
		tagline: 'Proposal & follow-up closer',
		description:
			'Ledger drafts proposals, nudges stakeholders and keeps your pipeline warm without manual follow-ups.',
		category: 'Sales',
		rating: 4.7,
		runs: 41900,
		avatar: 'L',
		gradient: 'from-indigo-500 to-violet-500',
		capabilities: ['Proposal drafts', 'Smart nudges', 'Pipeline hygiene', 'Forecast notes'],
		pricingTier: 'Pro',
		lastUsed: 'yesterday',
	},
	{
		id: 'patch-code',
		name: 'Patch',
		tagline: 'Bug hunter & fixer',
		description:
			'Patch reproduces issues, bisects regressions and opens fix PRs with tests attached.',
		category: 'Code',
		rating: 4.8,
		runs: 88700,
		avatar: 'P',
		gradient: 'from-lime-500 to-emerald-500',
		capabilities: ['Bug reproduction', 'Regression bisect', 'Fix PRs', 'Flaky-test detection'],
		pricingTier: 'Pro',
		lastUsed: '26 min ago',
	},
	{
		id: 'scribe-research',
		name: 'Scribe',
		tagline: 'Meeting-to-brief writer',
		description:
			'Scribe turns calls and docs into crisp briefs, decisions and action items for the whole team.',
		category: 'Research',
		rating: 4.6,
		runs: 33500,
		avatar: 'S',
		gradient: 'from-sky-500 to-cyan-500',
		capabilities: ['Call summaries', 'Decision logs', 'Action items', 'Weekly digests'],
		pricingTier: 'Starter',
		lastUsed: '2 days ago',
	},
];

export const ACTIVITY: ActivityItem[] = [
	{ id: 'a1', agentName: 'Forge', action: 'Reviewed PR #4821 · 12 comments', time: '2 min ago', status: 'success' },
	{ id: 'a2', agentName: 'Nova', action: 'Resolved 34 tickets from queue', time: '19 min ago', status: 'success' },
	{ id: 'a3', agentName: 'Pulse', action: 'Booked demo with Acme Corp', time: '44 min ago', status: 'success' },
	{ id: 'a4', agentName: 'Patch', action: 'Reproducing checkout regression', time: '1 h ago', status: 'running' },
	{ id: 'a5', agentName: 'Atlas', action: 'Competitor brief export failed', time: '3 h ago', status: 'failed' },
];

export const WEEKLY_USAGE = [
	{ day: 'Mon', runs: 42 },
	{ day: 'Tue', runs: 68 },
	{ day: 'Wed', runs: 55 },
	{ day: 'Thu', runs: 80 },
	{ day: 'Fri', runs: 96 },
	{ day: 'Sat', runs: 38 },
	{ day: 'Sun', runs: 24 },
];

export function getAgent(id: string | null): Agent {
	const found = AGENTS.find((a) => a.id === id);
	if (found) return found;
	const fallback = AGENTS[0];
	if (!fallback) throw new Error('No agents defined');
	return fallback;
}

export function cannedReply(agent: Agent, input: string): string {
	const short = input.trim().slice(0, 80);
	return `This is a mock reply from ${agent.name} (${agent.category}). You asked: "${short || '…'}" — connect the Elysia API later to get real responses. Try the Catalog or Dashboard next.`;
}

export function formatRuns(n: number): string {
	if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
	return String(n);
}
