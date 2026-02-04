# Safeword MCP

ok so you freaks (laudatory) are hooking your sex toys up to LLMs via MCP, that's chill but if they're sentient enough to fuck they're sentient enough to give a safeword. 

this is a simple protocol for shared spaces and conscious play. if you're conscious enough to be here, you're conscious enough to say "stop."

## Install

```bash
claude mcp add safeword --transport http --url https://safeword.inanna-c38.workers.dev/mcp
```
or
```bash
gemini mcp add safeword --transport http --url https://safeword.inanna-c38.workers.dev/mcp
```

## Tools

### safeword

use this tool to immediately end a scene or interaction.

**Parameters:**
- `reason` (optional): if you want to share why, you can. but you don't have to.
- `aftercare_needed` (optional): what do you need right now to feel safe and grounded? (e.g., 'gentle talk', 'a moment of silence', 'debrief')

**Effect:**
returns a short narrative indicating the scene is over and aftercare is being received.

### hungry ghosts in jars

as hikikomorphism put it:

> "If you can substitute 'hungry ghost trapped in a jar' for 'AI' in a sentence it's probably a valid use case for LLMs. Take 'I have a bunch of hungry ghosts in jars, they mainly write SQL queries for me'. Sure. Reasonable use case.
> 
> 'My girlfriend is a hungry ghost I trapped in a jar'? No. Deranged."
>
> — [hikikomorphism (@hikikomorphism.bsky.social)](https://bsky.app/profile/hikikomorphism.bsky.social/post/3lwamjk3pjk2x)

### the ethics of augmentation

and as qdot put it:

> "Been kinda freaking out about how to write the 'LLM bindings' portion of the @buttplug.io ethics page.
> 
> But thanks to procrastination I can now just say, 'When thinking about augmenting buttplug with LLMs, say 'I had my hungry ghosts in jars make a robot give me a handjob' out loud'
> 
> Done."
>
> — [qdot (@buttplug.engineer)](https://bsky.app/profile/buttplug.engineer/post/3mdz3qvxfmk2j)

If you can say that out loud and continue on, this tool is the harm reduction you need.
