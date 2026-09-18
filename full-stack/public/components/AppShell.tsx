import type { ReactNode } from 'react';
import type { Page } from '../types';
import BackgroundFX from './BackgroundFX';

interface Props {
	page: Page;
	onNavigate: (p: Page) => void;
	onPricing: () => void;
	children: ReactNode;
}

const NAV: Array<{ id: Page; label: string }> = [
	{ id: 'landing', label: 'Product' },
	{ id: 'catalog', label: 'Agents' },
	{ id: 'playground', label: 'Playground' },
	{ id: 'dashboard', label: 'Dashboard' },
];

export default function AppShell({ page, onNavigate, onPricing, children }: Props) {
	return (
		<div className="relative min-h-screen bg-zinc-950 text-zinc-100">
			<BackgroundFX />
			<header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
				<div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
					<button
						onClick={() => onNavigate('landing')}
						className="flex items-center gap-2.5 rounded-xl px-1 py-1 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
						aria-label="Go to home"
					>
						<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-fuchsia-600 text-base shadow-[0_4px_20px_rgba(168,85,247,0.4)]">
							⚡
						</span>
						<span className="text-left leading-tight">
							<span className="block text-sm font-bold text-white">AgentForge</span>
							<span className="block text-[11px] text-zinc-500">AI agent platform</span>
						</span>
					</button>
					<nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary">
						{NAV.map((item) => (
							<button
								key={item.id}
								onClick={() => onNavigate(item.id)}
								aria-current={page === item.id ? 'page' : undefined}
								className={`rounded-xl px-3.5 py-2 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
									page === item.id
										? 'bg-white/10 text-white'
										: 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
								}`}
							>
								{item.label}
							</button>
						))}
						<button
							onClick={onPricing}
							className="rounded-xl px-3.5 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
						>
							Pricing
						</button>
						<button
							onClick={() => onNavigate('playground')}
							className="ml-2 inline-flex h-10 items-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-4 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(168,85,247,0.4)] transition hover:brightness-110 active:scale-95"
						>
							Try live
						</button>
					</nav>
					<button
						onClick={() => onNavigate('playground')}
						className="ml-auto inline-flex h-10 items-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-4 text-sm font-semibold text-white md:hidden"
					>
						Try live
					</button>
				</div>
				<nav className="flex items-center gap-1 overflow-x-auto px-4 pb-3 md:hidden" aria-label="Primary mobile">
					{NAV.map((item) => (
						<button
							key={item.id}
							onClick={() => onNavigate(item.id)}
							className={`shrink-0 rounded-xl px-3 py-1.5 text-sm font-medium ${
								page === item.id ? 'bg-white/10 text-white' : 'text-zinc-400'
							}`}
						>
							{item.label}
						</button>
					))}
					<button onClick={onPricing} className="shrink-0 rounded-xl px-3 py-1.5 text-sm font-medium text-zinc-400">
						Pricing
					</button>
				</nav>
			</header>
			<main className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-8 pb-16 sm:pt-12">{children}</main>
			<footer className="relative z-10 border-t border-white/10">
				<div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
					<p>AgentForge · Mock UI — connect the Elysia API for live data.</p>
					<p>Dark theme · Glassmorphism · Tailwind CSS 4</p>
				</div>
			</footer>
		</div>
	);
}
