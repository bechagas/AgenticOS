export default function BackgroundFX() {
	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
			<div className="animate-drift absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
			<div className="animate-drift-slow absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
		</div>
	);
}
