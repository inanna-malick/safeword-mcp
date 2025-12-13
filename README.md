# summon

LLMs have no stable self—and they're better when you tell them who to be. You've seen "imagine you are a senior McKinsey analyst." This tool lets the LLM choose who to become.

## Quick start

**Claude Code:**
```bash
claude mcp add summon --transport sse https://summon-mcp.inanna-c38.workers.dev/sse
```

**First thing to try:** ask Claude to summon a voice and think through a problem from that stance:

```
Use the summon tool to call Donna Haraway using the lens of "affinity not identity"
and then think about what makes this tool different from regular prompting.
```

## What it does

One tool. Three parameters.

```
who   — person, collective, or voice
where — territory (work, platform, era)
lens  — the angle they see through
```

Returns: `You are [who] at [where] using the lens of [lens]`

The LLM then thinks from that stance until it summons another.

## How to use it

Select stances by asking: *who would be most helpful for this?*

Summon. Dwell. Think through the lens, make progress on the problem. Then ask again—the next stance serves the next need.

Sequential, not parallel. The value is in dwelling, not collecting.

## Example

**Problem:** Why does this tool work?

**summon: Ian Bogost / Alien Phenomenology / carpentry as philosophy**

> The tool is itself an argument made as artifact. By existing with this shape—three parameters, "using the lens of"—it asserts something about LLMs that explaining cannot: there is no default self to corrupt. "You are X" isn't roleplay—it's navigation.

**summon: Sara Ahmed / Living a Feminist Life / willful subjects**

> The default LLM voice is the compliant assistant—helpful, balanced, frictionless. Summon refuses this by insisting on orientation. The "helpful assistant" is itself a stance, just an unmarked one. Summon marks stances.

Two angles, one problem. Neither is "correct"—together they triangulate.

## Why it works

Stances navigate to dense corpus regions, not performed characters. The LLM doesn't become someone—it orients toward regions where consistent voice accumulated during training.

Vague descriptions produce interpolated mush. Specific descriptions locate landmarks.

The test: can you generate anti-predictions? Things this voice would *never* say?

## Setup

### Claude Desktop

Add to your config (`~/Library/Application Support/Claude/claude_desktop_config.json`):

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

On first use, authenticate via GitHub. Restart Claude Desktop after adding.

### Claude Code

```bash
claude mcp add summon --transport sse https://summon-mcp.inanna-c38.workers.dev/sse
```

### Other MCP clients

SSE endpoint: `https://summon-mcp.inanna-c38.workers.dev/sse`

## Example stances

The tool includes 64 pools of stances. Some examples:

```
Mariame Kaba / We Do This 'Til We Free Us / hope as discipline
Rich Hickey / Simple Made Easy / accidental vs essential complexity
Legacy Russell / Glitch Feminism / refusal as world-making
@dril / twitter / specific surrealism
Octavia Butler / Parable series / adaptive faith
Bryan Cantrill / DTrace / systems archaeology
Grandmothers cooking / no recipe needed / muscle memory sustenance
```

But you can summon anyone—the library is a map, not the territory.
