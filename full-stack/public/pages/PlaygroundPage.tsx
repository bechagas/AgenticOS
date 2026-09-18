import { useEffect, useRef, useState } from 'react';
import { AGENTS, cannedReply, getAgent } from '../data/agents';
import type { ChatMessage } from '../types';
import Avatar from '../components/Avatar';
import ChatComposer from '../components/ChatComposer';
import ChatMessageBubble from '../components/ChatMessage';
import GlassCard from '../components/GlassCard';

interface Props {
	agentId: string;
	onSelectAgent: (id: string) => void;
}

let seq = 0;
const nextId = () => `m-${Date.now()}-${seq++}`;

export default function PlaygroundPage({ agentId, onSelectAgent }: Props) {
	const agent = getAgent(agentId);
	const [messages, setMessages] = useState<ChatMessage[]>([
		{ id: 'welcome', role: 'assistant', content: `Hi! I'm ${agent.name} — ${agent.tagline}. Ask me anything to test this mock playground.`, agentId: agent.id },
	]);
	const [typing, setTyping] = useState(false);
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const a = getAgent(agentId);
		setMessages([
			{ id: nextId(), role: 'assistant', content: `Hi! I'm ${a.name} — ${a.tagline}. Ask me anything to test this mock playground.`, agentId: a.id },
		]);
		setTyping(false);
	}, [agentId]);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}, [messages, typing]);

	const send = (text: string) => {
		const current = getAgent(agentId);
		setMessages((m) => [...m, { id: nextId(), role: 'user', content: text, agentId: current.id }]);
		setTyping(true);
		window.setTimeout(() => {
			setMessages((m) => [...m, { id: nextId(), role: 'assistant', content: cannedReply(current, text), agentId: current.id }]);
			setTyping(false);
		}, 800);
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<p className="text-xs font-semibold tracking-[0.2em] text-violet-300/80 uppercase">Playground</p>
					<h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Test agents live</h1>
				</div>
				<label className="flex items-center gap-2 text-sm text-zinc-400">
					Agent
					<select
						value={agent.id}
						onChange={(e) => onSelectAgent(e.target.value)}
						className="h-11 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-violet-400/50 focus:outline-none"
						aria-label="Select agent"
					>
						{AGENTS.map((a) => (
							<option key={a.id} value={a.id}>
								{a.name} · {a.category}
							</option>
						))}
					</select>
				</label>
			</div>

			<div className="grid gap-4 lg:grid-cols-3">
				<GlassCard className="flex min-h-120 flex-col overflow-hidden lg:col-span-2">
					<div className="flex items-center gap-3 border-b border-white/10 p-4">
						<Avatar letter={agent.avatar} gradient={agent.gradient} />
						<div className="min-w-0 flex-1">
							<p className="truncate text-sm font-bold text-white">{agent.name}</p>
							<p className="flex items-center gap-1.5 text-xs text-emerald-300">
								<span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · mock
							</p>
						</div>
						<button
							onClick={() => onSelectAgent(agent.id)}
							className="h-9 rounded-xl border border-white/10 px-3 text-xs font-medium text-zinc-400 transition hover:bg-white/10 hover:text-zinc-200"
						>
							Clear chat
						</button>
					</div>
					<div className="flex max-h-105 min-h-80 flex-1 flex-col gap-4 overflow-y-auto p-4">
						{messages.map((m) => (
							<ChatMessageBubble key={m.id} message={m} />
						))}
						{typing && (
							<div className="flex items-center gap-2 text-xs text-zinc-500" role="status" aria-label="Agent is typing">
								<span className="inline-block h-2 w-2 animate-pulse rounded-full bg-violet-400" />
								{agent.name} is typing…
							</div>
						)}
						<div ref={bottomRef} />
					</div>
					<ChatComposer onSend={send} disabled={typing} />
				</GlassCard>

				<div className="flex flex-col gap-4">
					<GlassCard className="p-5">
						<h2 className="text-sm font-bold text-white">Agent card</h2>
						<p className="mt-2 text-sm leading-6 text-zinc-400">{agent.description}</p>
						<ul className="mt-3 flex flex-col gap-1.5">
							{agent.capabilities.map((c) => (
								<li key={c} className="flex items-center gap-2 text-sm text-zinc-300">
									<span aria-hidden className="text-emerald-300">✓</span> {c}
								</li>
							))}
						</ul>
					</GlassCard>
					<GlassCard className="p-5">
						<h2 className="text-sm font-bold text-white">Try next</h2>
						<div className="mt-3 flex flex-col gap-2">
							{AGENTS.filter((a) => a.id !== agent.id).slice(0, 3).map((a) => (
								<button
									key={a.id}
									onClick={() => onSelectAgent(a.id)}
									className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/4 p-2.5 text-left transition hover:bg-white/8"
								>
									<Avatar letter={a.avatar} gradient={a.gradient} />
									<span>
										<span className="block text-sm font-semibold text-white">{a.name}</span>
										<span className="block text-xs text-zinc-500">{a.category}</span>
									</span>
								</button>
							))}
						</div>
					</GlassCard>
				</div>
			</div>
		</div>
	);
}
