import type { ChatMessage } from '../types';
import { getAgent } from '../data/agents';
import Avatar from './Avatar';

export default function ChatMessageBubble({ message }: { message: ChatMessage }) {
	const isUser = message.role === 'user';
	if (isUser) {
		return (
			<div className="flex justify-end">
				<div className="max-w-[85%] rounded-2xl rounded-br-md bg-linear-to-r from-violet-600 to-fuchsia-600 px-4 py-2.5 text-sm leading-6 text-white shadow-[0_4px_20px_rgba(168,85,247,0.3)] sm:max-w-[70%]">
					{message.content}
				</div>
			</div>
		);
	}
	const agent = getAgent(message.agentId);
	return (
		<div className="flex justify-start gap-2.5">
			<Avatar letter={agent.avatar} gradient={agent.gradient} />
			<div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/6 px-4 py-2.5 text-sm leading-6 text-zinc-200 backdrop-blur-xl sm:max-w-[70%]">
				<p className="mb-1 text-[11px] font-semibold tracking-wide text-violet-300 uppercase">
					{agent.name}
				</p>
				{message.content}
			</div>
		</div>
	);
}
