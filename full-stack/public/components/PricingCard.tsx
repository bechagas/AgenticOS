import GlassCard from './GlassCard';

interface Props {
	name: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	highlighted?: boolean;
	cta: string;
	onCta: () => void;
}

export default function PricingCard({ name, price, period, description, features, highlighted, cta, onCta }: Props) {
	return (
		<GlassCard
			className={`flex flex-col p-6 ${highlighted ? 'border-violet-400/30 bg-white/9 shadow-[0_8px_50px_rgba(139,92,246,0.25)]' : ''}`}
		>
			{highlighted && (
				<span className="mb-3 inline-block w-fit rounded-full bg-linear-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
					Most popular
				</span>
			)}
			<h3 className="text-lg font-bold text-white">{name}</h3>
			<p className="mt-1 text-sm text-zinc-400">{description}</p>
			<p className="mt-4">
				<span className="text-4xl font-bold text-white">{price}</span>
				<span className="ml-1 text-sm text-zinc-500">{period}</span>
			</p>
			<ul className="mt-5 flex flex-col gap-2.5">
				{features.map((f) => (
					<li key={f} className="flex items-start gap-2 text-sm text-zinc-300">
						<span aria-hidden className="mt-0.5 text-emerald-300">✓</span>
						{f}
					</li>
				))}
			</ul>
			<button
				onClick={onCta}
				className={`mt-6 h-11 w-full rounded-2xl text-sm font-semibold transition active:scale-[0.98] ${
					highlighted
						? 'bg-linear-to-r from-violet-600 to-fuchsia-600 text-white shadow-[0_4px_25px_rgba(168,85,247,0.45)] hover:brightness-110'
						: 'border border-white/10 bg-white/[0.07] text-zinc-200 hover:bg-white/[0.14]'
				}`}
			>
				{cta}
			</button>
		</GlassCard>
	);
}
