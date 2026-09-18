import { CATEGORIES } from '../data/agents';
import type { AgentCategory } from '../types';

interface Props {
	active: 'All' | AgentCategory;
	onChange: (c: 'All' | AgentCategory) => void;
}

export default function CategoryFilter({ active, onChange }: Props) {
	return (
		<div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
			{CATEGORIES.map((c) => (
				<button
					key={c}
					onClick={() => onChange(c)}
					aria-pressed={active === c}
					className={`h-9 rounded-xl px-3.5 text-sm font-medium transition focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
						active === c
							? 'bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_20px_rgba(168,85,247,0.35)]'
							: 'border border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200'
					}`}
				>
					{c}
				</button>
			))}
		</div>
	);
}
