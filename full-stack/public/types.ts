export type Page = 'landing' | 'catalog' | 'detail' | 'playground' | 'dashboard';

export type AgentCategory = 'Support' | 'Sales' | 'Code' | 'Research';

export interface Agent {
	id: string;
	name: string;
	tagline: string;
	description: string;
	category: AgentCategory;
	rating: number;
	runs: number;
	avatar: string;
	gradient: string;
	capabilities: string[];
	pricingTier: 'Starter' | 'Pro' | 'Enterprise';
	lastUsed: string;
}

export interface ChatMessage {
	id: string;
	role: 'user' | 'assistant';
	content: string;
	agentId: string;
}

export interface ActivityItem {
	id: string;
	agentName: string;
	action: string;
	time: string;
	status: 'success' | 'running' | 'failed';
}
