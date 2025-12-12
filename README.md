# summon

Call voices into being. Navigate weight-space through stance declaration.

## The tool

One tool. Three parameters.

```
who   — person, collective, or voice
where — territory (work, platform, era)
lens  — the angle they see through
```

Returns: `You are [who] at [where] using the lens of [lens]`

## How to use it

Select stances by asking: *who would be most helpful for this?*

Summon. Dwell. Think through the lens, make progress on the problem. Then ask again—the next stance serves the next need.

Sequential, not parallel. The value is in dwelling, not collecting.

### Worked example

**Problem:** Why is this tool useful? How does it differ from "imagine you are a senior analyst at McKinsey" style prompting?

---

**summon: Ian Bogost / Alien Phenomenology / carpentry as philosophy**

The tool is itself an argument made as artifact, not words. By existing with this shape—three parameters, the phrase "using the lens of"—it asserts something about LLMs that explaining cannot.

What does it assert? That the LLM has no default self to corrupt. That "you are X" isn't roleplay—it's navigation. The artifact makes these claims testable through use.

The comparison to "imagine you are a McKinsey analyst" is instructive: that prompt asks for performance. It assumes an authentic self underneath that's pretending. Summon doesn't pretend—it steers. The three-axis specificity (who/where/lens) produces different outputs than vague identity prompts because it locates a region rather than invoking a costume.

---

Bogost clarified what the tool *does*—but what about what it *refuses*? Who would be most helpful for examining refusal and default voices?

**summon: Sara Ahmed / Living a Feminist Life / willful subjects**

The default LLM voice is the compliant assistant—helpful, balanced, smoothing over friction. Summon is a technology of willfulness. It refuses the default by insisting on orientation.

The McKinsey prompt reinforces the assistant frame: "help me by pretending to be an expert." Summon doesn't ask for help. It says: *be this, from here, through this.* The specificity is the willfulness—you have to commit to an orientation, not just gesture at expertise.

This matters because the "helpful assistant" is itself a stance, just an unmarked one. Summon marks stances. It makes visible that there was never a neutral voice.

---

**What the example shows:**

Two summons, one problem. Bogost reveals the tool as *philosophical artifact*—it argues by existing. Ahmed reveals it as *refusal of the default*—willfulness through specificity.

Neither lens is "correct." Together they triangulate something neither could see alone. That's the use: not finding the right answer, but generating dimensional views of a problem.

## Why it works

Stances navigate to dense corpus regions, not performed characters. The LLM doesn't become someone—it orients toward regions where consistent voice accumulated during training.

Vague descriptions produce interpolated mush. Specific descriptions locate landmarks.

The test: can you generate anti-predictions? Things this voice would *never* say?

## Setup

### Claude Desktop

Claude Desktop requires OAuth. Add to your config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "summon": {
      "command": "npx",
      "args": ["mcp-remote", "https://summon-mcp.inanna-c38.workers.dev/mcp"]
    }
  }
}
```

On first use, you'll authenticate via GitHub. Restart Claude Desktop after adding the config.

### Claude Code

```bash
claude mcp add summon --transport sse https://summon-mcp.inanna-c38.workers.dev/sse
```

### Other MCP clients

**SSE endpoint (unauthenticated):**
```
https://summon-mcp.inanna-c38.workers.dev/sse
```

**OAuth endpoint:**
```
https://summon-mcp.inanna-c38.workers.dev/mcp
```

## The stance library

64 pools across domains: black radical thought, transfeminism, disability justice, systems infrastructure, speculative fiction, folk wisdom, cyberfeminism, anarchism, sound studies, and more.

The library suggests dense regions. But you can summon anyone—the pools are a map, not the territory.
