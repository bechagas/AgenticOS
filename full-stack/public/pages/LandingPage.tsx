import { useState } from 'react';
import { AGENTS } from '../data/agents';
import Badge from '../components/Badge';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';
import PricingCard from '../components/PricingCard';
import SectionHeading from '../components/SectionHeading';

interface Props {
	onBrowse: () => void;
	onTry: (id: string) => void;
	onOpenAgent: (id: string) => void;
}

const FEATURES = [
	{ icon: '🧩', title: 'Pre-built agents', text: 'Support, sales, code and research agents ready to deploy in minutes.' },
	{ icon: '💬', title: 'Live playground', text: 'Test any agent with streaming-style chat before wiring the API.' },
	{ icon: '📊', title: 'Usage analytics', text: 'Track runs, ratings and activity across every agent in one view.' },
	{ icon: '🔌', title: 'API-first', text: 'Swap the mock layer for Elysia endpoints without touching the UI.' },
];

const STEPS = [
	{ n: '01', title: 'Pick an agent', text: 'Browse the catalog and open the detail page.' },
	{ n: '02', title: 'Try in playground', text: 'Chat live and validate tone and skills.' },
	{ n: '03', title: 'Ship via API', text: 'Connect your backend when ready to go live.' },
];

export default function LandingPage({ onBrowse, onTry, onOpenAgent }: Props) {
	const [yearly, setYearly] = useState(false);
	const featured = AGENTS.slice(0, 3);
	const heroAgentId = featured[0]?.id ?? 'forge-code';

	return (
		<div className="flex flex-col gap-16 sm:gap-24">
			{/* Hero */}
			<section className="pt-4 text-center sm:pt-10">
				<Badge tone="violet">✨ 8 production-ready agents</Badge>
				<h1 className="mx-auto mt-5 max-w-3xl bg-linear-to-r from-violet-200 via-fuchsia-100 to-cyan-100 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl sm:leading-[1.1]">
					Ship AI agents your team loves
				</h1>
				<p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-400 sm:text-lg">
					Browse the catalog, test every agent in the playground and monitor usage — all in one dark, glassy workspace.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
					<Button onClick={onBrowse} className="w-full sm:w-auto">
						Browse agents →
					</Button>
					<Button variant="glass" onClick={() => onTry(heroAgentId)} className="w-full sm:w-auto">
						Try live playground
					</Button>
				</div>
				<div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-6 text-center">
					{[['210k+', 'agent runs'], ['4.8★', 'avg rating'], ['8', 'agents live']].map(([v, l]) => (
						<div key={l}>
							<p className="text-2xl font-bold text-white">{v}</p>
							<p className="text-xs text-zinc-500">{l}</p>
						</div>
					))}
				</div>
			</section>

			{/* Featured agents */}
			<section>
				<SectionHeading
					eyebrow="Catalog"
					title="Featured agents"
					subtitle="A taste of the catalog — open any agent for capabilities, reviews and live testing."
				/>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{featured.map((a) => (
						<GlassCard key={a.id} className="p-5">
							<p className="text-3xl">{a.avatar === 'N' ? '🤖' : a.avatar === 'P' && a.id.startsWith('pulse') ? '📈' : '🛠️'}</p>
							<h3 className="mt-3 font-bold text-white">{a.name}</h3>
							<p className="text-sm text-zinc-400">{a.tagline}</p>
							<button
								onClick={() => onOpenAgent(a.id)}
								className="mt-4 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
							>
								View details →
							</button>
						</GlassCard>
					))}
				</div>
			</section>

			{/* Features */}
			<section>
				<SectionHeading eyebrow="Why AgentForge" title="Everything you need to ship" />
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{FEATURES.map((f) => (
						<GlassCard key={f.title} className="p-5">
							<p className="text-2xl">{f.icon}</p>
							<h3 className="mt-3 text-sm font-bold text-white">{f.title}</h3>
							<p className="mt-1.5 text-sm leading-6 text-zinc-400">{f.text}</p>
						</GlassCard>
					))}
				</div>
			</section>

			{/* How it works */}
			<section>
				<SectionHeading eyebrow="Workflow" title="From discovery to deploy" />
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					{STEPS.map((s) => (
						<GlassCard key={s.n} className="p-6">
							<p className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-sm font-bold text-transparent">
								{s.n}
							</p>
							<h3 className="mt-2 font-bold text-white">{s.title}</h3>
							<p className="mt-1 text-sm text-zinc-400">{s.text}</p>
						</GlassCard>
					))}
				</div>
			</section>

			{/* Pricing (lives inside Landing) */}
			<section id="pricing" className="scroll-mt-24">
				<SectionHeading
					eyebrow="Pricing"
					title="Simple plans that scale"
					subtitle="Start free, upgrade when your agents take off. Cancel anytime."
				/>
				<div className="mt-6 flex items-center justify-center gap-3 text-sm">
					<span className={yearly ? 'text-zinc-500' : 'font-semibold text-white'}>Monthly</span>
					<button
						role="switch"
						aria-checked={yearly}
						onClick={() => setYearly((v) => !v)}
						className="relative h-7 w-12 rounded-full border border-white/10 bg-white/10 transition"
						aria-label="Toggle yearly billing"
					>
						<span
							className={`absolute top-0.5 h-5.5 w-5.5 rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 transition-all ${yearly ? 'left-5.5' : 'left-0.5'}`}
							style={{ height: 22, width: 22 }}
						/>
					</button>
					<span className={yearly ? 'font-semibold text-white' : 'text-zinc-500'}>
						Yearly <span className="text-emerald-300">−20%</span>
					</span>
				</div>
				<div className="mt-8 grid gap-4 md:grid-cols-3">
					<PricingCard
						name="Starter"
						price={yearly ? '$15' : '$19'}
						period="/mo"
						description="For side projects and first agents."
						features={['3 agents', '1k runs / mo', 'Community support']}
						cta="Start for free"
						onCta={onBrowse}
					/>
					<PricingCard
						name="Pro"
						price={yearly ? '$39' : '$49'}
						period="/mo"
						description="For teams shipping to production."
						features={['All 8 agents', '50k runs / mo', 'Playground + analytics', 'Priority support']}
						highlighted
						cta="Start 14-day trial"
						onCta={() => onTry(heroAgentId)}
					/>
					<PricingCard
						name="Enterprise"
						price="Custom"
						period=""
						description="SSO, VPC and SLAs for scale."
						features={['Unlimited runs', 'SSO / SAML', 'Dedicated support', 'Custom models']}
						cta="Talk to sales"
						onCta={onBrowse}
					/>
				</div>
			</section>
		</div>
	);
}
