import { useMemo, useState } from 'react';
import { AGENTS } from '../data/agents';
import type { AgentCategory } from '../types';
import AgentCard from '../components/AgentCard';
import CategoryFilter from '../components/CategoryFilter';
import EmptyState from '../components/EmptyState';
import SearchInput from '../components/SearchInput';
import SectionHeading from '../components/SectionHeading';

interface Props {
	onOpen: (id: string) => void;
	onTry: (id: string) => void;
}

type Sort = 'popular' | 'rating' | 'name';

export default function CatalogPage({ onOpen, onTry }: Props) {
	const [query, setQuery] = useState('');
	const [category, setCategory] = useState<'All' | AgentCategory>('All');
	const [sort, setSort] = useState<Sort>('popular');

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		const filtered = AGENTS.filter(
			(a) =>
				(category === 'All' || a.category === category) &&
				(!q || `${a.name} ${a.tagline} ${a.description}`.toLowerCase().includes(q)),
		);
		return [...filtered].sort((a, b) =>
			sort === 'rating' ? b.rating - a.rating : sort === 'name' ? a.name.localeCompare(b.name) : b.runs - a.runs,
		);
	}, [query, category, sort]);

	return (
		<div className="flex flex-col gap-6">
			<SectionHeading
				align="left"
				eyebrow="Catalog"
				title="Find your agent"
				subtitle={`${results.length} of ${AGENTS.length} agents · mock data, ready for the Elysia API.`}
			/>
			<div className="flex flex-col gap-3 lg:flex-row lg:items-center">
				<div className="flex-1">
					<SearchInput value={query} onChange={setQuery} testId="agent-search" placeholder="Search by name, skill or use case…" />
				</div>
				<label className="flex items-center gap-2 text-sm text-zinc-400">
					Sort
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value as Sort)}
						className="h-10 rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white focus:border-violet-400/50 focus:outline-none"
					>
						<option value="popular">Most popular</option>
						<option value="rating">Top rated</option>
						<option value="name">Name A–Z</option>
					</select>
				</label>
			</div>
			<CategoryFilter active={category} onChange={setCategory} />
			{results.length === 0 ? (
				<EmptyState
					title="No agents found"
					hint="Try a different search term or category."
					actionLabel="Clear filters"
					onAction={() => {
						setQuery('');
						setCategory('All');
					}}
				/>
			) : (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{results.map((a) => (
						<AgentCard key={a.id} agent={a} onOpen={onOpen} onTry={onTry} />
					))}
				</div>
			)}
		</div>
	);
}
