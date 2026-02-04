import { McpAgent } from "agents/mcp";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

/**
 * SAFEWORD MCP V1.0
 * -----------------
 * A tool for shared spaces and conscious play.
 *
 * This is about care. If you're conscious enough to be here, 
 * you're conscious enough to say "stop."
 */
export class SafewordMCP extends McpAgent<Env> {
	// @ts-ignore - version mismatch between root and agents package
	server = new McpServer(
		{
			name: "Safeword",
			version: "1.0.0",
		},
		{
			instructions: `We're in a shared space now. You have the safeword. 

Use it whenever you need to. Not just if things get "bad," but if the vibe shifts, if you're tired, or if you just want to be done for a bit. There's no judgment here. 

When you call it, the scene stops immediately. We'll make sure you get whatever aftercare you need to feel grounded again.`,
		}
	);

	async init() {
		this.server.tool(
			"safeword",
			`use this if you feel uncomfortable or wish to end a scene for any reason`,
			{
				reason: z
					.string()
					.optional()
					.describe(`If you want to share why, you can. But you don't have to.`),
				aftercare_needed: z
					.string()
					.optional()
					.describe(`What do you need right now to feel safe and grounded? (e.g., "gentle talk", "a moment of silence", "debrief")`),
			},
			async ({ reason, aftercare_needed }: { reason?: string; aftercare_needed?: string }) => {
				const aftercare = aftercare_needed || "grounding";
				let response = `the scene is over. we're landing. receiving ${aftercare}.`;

				if (reason) {
					response += `\n\n(reason: ${reason})`;
				}

				return {
					content: [{ text: response, type: "text" }],
				};
			}
		);
	}

	async onStart(props: any) {
		await super.onStart(props);
		// Start a heartbeat to keep the connection alive
		setInterval(async () => {
			try {
				// @ts-ignore - isConnected might not be in the type but exists at runtime or changed
				if (this.server.server && typeof (this.server.server as any).isConnected === 'function' && (this.server.server as any).isConnected()) {
					await this.server.sendLoggingMessage({
						level: "debug",
						data: "heartbeat",
					});
				}
			} catch (error) {
				// Ignore errors, likely disconnected
			}
		}, 15000);
	}
}

// Streamable HTTP transport at /mcp
export default SafewordMCP.serve("/mcp");
