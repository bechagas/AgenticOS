import { useState } from 'react';

interface Props {
	onSend: (text: string) => void;
	disabled?: boolean;
}

export default function ChatComposer({ onSend, disabled }: Props) {
	const [value, setValue] = useState('');

	const submit = () => {
		const text = value.trim();
		if (!text || disabled) return;
		onSend(text);
		setValue('');
	};

	return (
		<div className="border-t border-white/10 p-3 sm:p-4">
			<div className="flex items-end gap-2">
				<textarea
					data-testid="chat-composer"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							submit();
						}
					}}
					rows={1}
					placeholder="Ask anything… (Enter to send)"
					className="max-h-32 min-h-11 flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/30 focus:outline-none"
				/>
				<button
					onClick={submit}
					disabled={disabled || !value.trim()}
					aria-label="Send message"
					className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-fuchsia-600 text-lg text-white transition hover:brightness-110 active:scale-95 disabled:opacity-40"
				>
					↑
				</button>
			</div>
			<p className="mt-2 text-[11px] text-zinc-500">Mock mode — replies are simulated locally.</p>
		</div>
	);
}
