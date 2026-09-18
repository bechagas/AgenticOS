import { Elysia } from 'elysia';
import { staticPlugin } from '@elysia/static';

const app = new Elysia()
    .use(
		await staticPlugin({
			prefix: '/',
			bunFullstack: true,
		})
	)
	.get('/message', { message: "Hello from server" } as const)
	.listen(5173);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);