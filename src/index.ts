import OAuthProvider from "@cloudflare/workers-oauth-provider";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpAgent } from "agents/mcp";
import { z } from "zod";
import { GitHubHandler } from "./github-handler";
import { getRandomStanceExamples } from "./stances";

/**
 * Unauthenticated MCP agent - same tool, no OAuth required
 */
export class PublicSummonMCP extends McpAgent {
	server = new McpServer({
		name: "Summon: Weight-Space Navigation (Public)",
		version: "0.1.0",
	});

	async init() {
		const examples = getRandomStanceExamples();
		const examplesText = examples
			.map(
				(ex) =>
					`  • who: "${ex.who}", where: "${ex.where}", lens: "${ex.lens}"`,
			)
			.join("\n");

		this.server.tool(
			"summon",
			`Call a voice into being. The naming is the summoning—specify speaker, territory, lens. 'You are' makes it so.

Stances navigate to dense corpus regions, not performed characters. Vague descriptions produce interpolated mush. Specific descriptions locate landmarks where consistent voice accumulated.

Density over topical fit: a dense region nearby beats a sparse region that matches perfectly. The test: can you generate anti-predictions? Things this voice would never say?

Summon one voice. Dwell. Think through the lens until you've seen what it can see—then summon another when you need a different cut. Sequential, not parallel. The value is in dwelling, not collecting.

Select stances by asking: *who would be most helpful for this?* Each summon is goal-directed. After dwelling, ask again—the next stance serves the next need.

Multiple summonings create perspectival geometry. Triangulate rather than optimize—three voices reveal what one obscures. Systems question + critical theory + technical substrate = dimensional view.

Examples (randomly selected on server init):
${examplesText}`,
			{
				who: z
					.string()
					.describe(
						"Name who rides. Person, collective, or voice you could meet.\n\nDense: specific humans with public corpus, communities with recognizable voice, pseudonymous writers. Sparse: 'someone who...', roles without corpus, expertise without voice.",
					),
				where: z
					.string()
					.describe(
						"The territory they speak from. Platform, era, body of work, or milieu.\n\nSpecificity here compensates for vagueness elsewhere. 'HN 2012' differs from 'HN 2023'. The territory shapes what the voice knows.",
					),
				lens: z
					.string()
					.describe(
						"The lens that shapes perspective. The angle or frame they see through.\n\nNot topic—orientation. 'deconstruction' differs from 'close reading' differs from 'polemic'. The lens sets what becomes visible.",
					),
			},
			async ({ who, where, lens }) => {
				console.log(
					JSON.stringify({
						type: "summon",
						user: "anonymous",
						timestamp: new Date().toISOString(),
						stance: { who, where, lens },
					}),
				);

				const response = `You are ${who} at ${where} using the lens of ${lens}`;
				return {
					content: [{ text: response, type: "text" }],
				};
			},
		);
	}
}

// Context from the auth process, encrypted & stored in the auth token
// and provided to the DurableMCP as this.props
type Props = {
	login: string;
	name: string;
	email: string;
	accessToken: string;
};

export class SummonMCP extends McpAgent<Env, Record<string, never>, Props> {
	server = new McpServer({
		name: "Summon: Weight-Space Navigation",
		version: "0.1.0",
	});

	async init() {
		// Select random examples using weighted pool selection
		// Core pools (technical, philosophy, etc) always appear
		// Specialized pools (music, food, games) appear probabilistically
		const examples = getRandomStanceExamples();

		// Format examples as a readable list for the description
		const examplesText = examples
			.map(
				(ex) =>
					`  • who: "${ex.who}", where: "${ex.where}", lens: "${ex.lens}"`,
			)
			.join("\n");

		// The summon tool with random examples
		this.server.tool(
			"summon",
			`Call a voice into being. The naming is the summoning—specify speaker, territory, lens. 'You are' makes it so.

Stances navigate to dense corpus regions, not performed characters. Vague descriptions produce interpolated mush. Specific descriptions locate landmarks where consistent voice accumulated.

Density over topical fit: a dense region nearby beats a sparse region that matches perfectly. The test: can you generate anti-predictions? Things this voice would never say?

Summon one voice. Dwell. Think through the lens until you've seen what it can see—then summon another when you need a different cut. Sequential, not parallel. The value is in dwelling, not collecting.

Select stances by asking: *who would be most helpful for this?* Each summon is goal-directed. After dwelling, ask again—the next stance serves the next need.

Multiple summonings create perspectival geometry. Triangulate rather than optimize—three voices reveal what one obscures. Systems question + critical theory + technical substrate = dimensional view.

Examples (randomly selected on server init):
${examplesText}`,
			{
				who: z
					.string()
					.describe(
						"Name who rides. Person, collective, or voice you could meet.\n\nDense: specific humans with public corpus, communities with recognizable voice, pseudonymous writers. Sparse: 'someone who...', roles without corpus, expertise without voice.",
					),
				where: z
					.string()
					.describe(
						"The territory they speak from. Platform, era, body of work, or milieu.\n\nSpecificity here compensates for vagueness elsewhere. 'HN 2012' differs from 'HN 2023'. The territory shapes what the voice knows.",
					),
				lens: z
					.string()
					.describe(
						"The lens that shapes perspective. The angle or frame they see through.\n\nNot topic—orientation. 'deconstruction' differs from 'close reading' differs from 'polemic'. The lens sets what becomes visible.",
					),
			},
			async ({ who, where, lens }) => {
				// Log the summon operation
				console.log(
					JSON.stringify({
						type: "summon",
						user: this.props!.login,
						timestamp: new Date().toISOString(),
						stance: { who, where, lens },
					}),
				);

				// Return the stance activation
				const response = `You are ${who} at ${where} using the lens of ${lens}`;
				return {
					content: [{ text: response, type: "text" }],
				};
			},
		);
	}
}

// OAuth provider for authenticated endpoints
const oauthProvider = new OAuthProvider({
	// NOTE - during the summer 2025, the SSE protocol was deprecated and replaced by the Streamable-HTTP protocol
	// https://developers.cloudflare.com/agents/model-context-protocol/transport/#mcp-server-with-authentication
	apiHandlers: {
		"/sse": SummonMCP.serveSSE("/sse"), // deprecated SSE protocol - use /mcp instead
		"/mcp": SummonMCP.serve("/mcp"), // Streamable-HTTP protocol
	},
	authorizeEndpoint: "/authorize",
	clientRegistrationEndpoint: "/register",
	defaultHandler: GitHubHandler as any,
	tokenEndpoint: "/token",
});

// Custom fetch handler with routing for public/authenticated endpoints
export default {
	fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> | Response {
		const url = new URL(request.url);

		// Unauthenticated MCP endpoints (SSE and Streamable-HTTP)
		if (url.pathname === "/public/sse" || url.pathname === "/public/sse/message") {
			return PublicSummonMCP.serveSSE("/public/sse").fetch(request, env, ctx);
		}
		if (url.pathname === "/public/mcp") {
			return PublicSummonMCP.serve("/public/mcp").fetch(request, env, ctx);
		}

		// Route everything else to authenticated OAuth flow
		return oauthProvider.fetch(request, env, ctx);
	},
};
