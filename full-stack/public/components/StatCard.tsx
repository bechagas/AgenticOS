import GlassCard from './GlassCard';

interface Props {
	label: string;
	value: string;
	delta: string;
	testId?: string;
}

export default function StatCard({ label, value, delta, testId }: Props) {
	return (
		<GlassCard testId={testId} className="p-5">
			<p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">{label}</p>
			<p className="mt-2 text-3xl font-bold tabular-nums text-white">{value}</p>
			<p className="mt-1 text-xs font-medium text-emerald-300">{delta}</p>
		</GlassCard>
	);
}
