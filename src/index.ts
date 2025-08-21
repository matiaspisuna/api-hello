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

const peopleData = [
	{
		id: 1,
		name: 'John Doe',
		address: '123 Main St, Anytown, USA 12345',
		phone: '555-123-4567',
	},
	{
		id: 2,
		name: 'Jane Smith',
		address: '456 Oak Ave, Somecity, USA 67890',
		phone: '555-987-6543',
	},
	{
		id: 3,
		name: 'Carlos Ramirez',
		address: '789 Pine Ln, Villagetown, USA 10112',
		phone: '555-555-5555',
	},
];

export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response(JSON.stringify(peopleData, null, 2), {
			headers: {
				'content-type': 'application/json;charset=UTF-8',
			},
		});
	},
} satisfies ExportedHandler<Env>;
