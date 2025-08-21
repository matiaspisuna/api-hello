/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const data = {
			message: 'Hello World!',
			source: 'Cloudflare Worker',
			timestamp: new Date().toISOString(),
		};

		return new Response(JSON.stringify(data), {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});
	},
} satisfies ExportedHandler<Env>;
