import { useCallback, useState } from 'react';
import AppShell from './components/AppShell';
import AgentDetailPage from './pages/AgentDetailPage';
import CatalogPage from './pages/CatalogPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import PlaygroundPage from './pages/PlaygroundPage';
import type { Page } from './types';

const App = () => {
	const [page, setPage] = useState<Page>('landing');
	const [selectedAgentId, setSelectedAgentId] = useState<string>('forge-code');

	const navigate = useCallback((p: Page) => {
		setPage(p);
		requestAnimationFrame(() => window.scrollTo({ top: 0 }));
	}, []);

	const scrollToPricing = useCallback(() => {
		if (page !== 'landing') {
			setPage('landing');
			window.setTimeout(() => {
				document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
			}, 80);
			return;
		}
		document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
	}, [page]);

	const openAgent = useCallback((id: string) => {
		setSelectedAgentId(id);
		setPage('detail');
		requestAnimationFrame(() => window.scrollTo({ top: 0 }));
	}, []);

	const tryAgent = useCallback((id: string) => {
		setSelectedAgentId(id);
		setPage('playground');
		requestAnimationFrame(() => window.scrollTo({ top: 0 }));
	}, []);

	return (
		<AppShell page={page} onNavigate={navigate} onPricing={scrollToPricing}>
			{page === 'landing' && (
				<LandingPage onBrowse={() => navigate('catalog')} onTry={tryAgent} onOpenAgent={openAgent} />
			)}
			{page === 'catalog' && <CatalogPage onOpen={openAgent} onTry={tryAgent} />}
			{page === 'detail' && (
				<AgentDetailPage agentId={selectedAgentId} onBack={() => navigate('catalog')} onTry={tryAgent} />
			)}
			{page === 'playground' && (
				<PlaygroundPage agentId={selectedAgentId} onSelectAgent={setSelectedAgentId} />
			)}
			{page === 'dashboard' && <DashboardPage onOpen={openAgent} onTry={tryAgent} />}
		</AppShell>
	);
};

export default App;
