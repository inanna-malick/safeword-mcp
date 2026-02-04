# CLAUDE.md

## Commands

```bash
npm run dev          # Local dev server (port 8788)
npm run build        # Build
npm run type-check   # TypeScript checking
npx wrangler deploy  # Deploy to Cloudflare Workers
```

## Architecture

MCP server on Cloudflare Workers. Entry point: `src/index.ts`.

One tool: `safeword`.

## Design decisions

- **Consent First**: The tool is the ultimate authority. If the model calls it, the scene is over.
- **Narrative Closure**: The return string provides immediate transition back to a safe baseline.
