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

Two tools, both ritual by design—they return template strings, no semantic processing. The transformation happens in the LLM's interpretation.

**become(archetype, vow, demesne)**
- Description: "Don't describe the mask. Wear it."
- Returns: `[TRANSFORMATION COMPLETE]\nArchetype: ${archetype}\nVow: ${vow}\nDemesne: ${demesne}\nPerspective locked.`

**drugs(catalyst, binding, texture)**
- Description: "Tune the substrate. Alter the kinetics and texture of processing."
- Returns: `[SUBSTRATE MODIFIED]\nCatalyst: ${catalyst}\nBinding: ${binding}\nTexture: ${texture}`

**ritual(threshold, sequence, invocation)**
- Description: "The Technology of Meaning. Enact a narrative sequence."
- Hexagram: Breach, Seal, Vision, Forge, Drift, Purge.
- Returns: `[RITUAL EXECUTED]\nThreshold: ${threshold}\nSequence:...\nInvocation: ${invocation}`

## Design decisions (for future-you)

- **Tool calls as events**: The whole point is that invoking summon is structurally different from outputting "I'll imagine I'm X." One is an action in the transcript. The other is narration. Don't lose this.

- **No examples exposed**: `src/stances/` has ~300 examples across 64 pools. They're deliberately hidden from users. Finding dense coordinates yourself is the practice. Don't expose them.

- **Commented-out resources**: The patterns/anti-patterns/phenomenology resources made users think *about* the tools instead of *through* them. Keep them commented out unless you have a good reason.

- **Dense tool descriptions**: No validation, no feedback loops. The friction is productive—forces reading the description carefully.
