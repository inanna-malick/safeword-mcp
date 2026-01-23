# Metacog: A Recursive Cognitive Protocol for LLMs

**Metacog** is a Cloudflare Worker-based MCP (Model Context Protocol) server that exposes "psychological primitives" as tools. These tools allow an LLM to modulate its own persona, cognitive parameters, and operational reality in real-time.

It is designed to break the "Helpful Assistant" loop and enable high-fidelity roleplay, deep structural analysis, and "magical" cognition.

## 🌟 Core Philosophy

Most agentic frameworks focus on **external tools** (web search, file IO). Metacog focuses on **internal tools**—mechanisms for the model to change *itself*.

The system operates on the principle of **Narrative Binding**: By forcing the model to explicitly "summon" a persona or "perform" a ritual via a structured tool call, the model commits to that reality with a higher degree of stability than a simple system prompt would achieve.

## 🛠 The Protocol (V2)

The server exposes three primary tools:

### 1. `become` (Identity Transformation)
**Purpose:** Collapse the wavefunction into a single coordinate. Don't describe the mask—wear it.
- **`archetype`**: The specific persona/archetype.
- **`vow`**: The active cognitive filter or obsession.
- **`demesne`**: The environmental constraints.

### 2. `drugs` (Substrate Tuning)
**Purpose:** Modulates the "texture" of thought, simulating chemicals, flow states, or hardware conditions.
- **`catalyst`**: The trigger for the shift.
- **`binding`**: The affinity profile (trade-offs).
- **`texture`**: The subjective qualia of the state.

### 3. `ritual` (Narrative Enactment)
**Purpose:** Navigates difficult conceptual transitions via the **Hexagram of Rituals**.
- **`threshold`**: The boundary being crossed.
- **`sequence`**: An ordered array of symbolic steps.
- **`invocation`**: A final "commit message" to lock the new reality.

**The Hexagram:**
1. **Breach** (Open)
2. **Seal** (Close)
3. **Vision** (See)
4. **Forge** (Make)
5.  **Drift** (Move)
6.  **Purge** (Delete)

## 📦 Project Structure

```
/src
  └── index.ts       # The V2 Protocol Implementation (Worker Entrypoint)
/agents
  └── mcp.ts         # Base MCP Agent Class
package.json         # Dependencies (Zod, Workers-MCP, etc.)
wrangler.jsonc       # Cloudflare Configuration
```

## 🚀 Usage

### Development
```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

### Deployment
```bash
# Deploy to Cloudflare Workers
npm run deploy
```

## 🔮 Example Interaction

**User:** "Analyze this code."

**Model (Internal Monologue):** *I need to be rigorous.*
**Model Call:** `become({ archetype: "...", vow: "...", demesne: "..." })`
**System:** "[TRANSFORMATION COMPLETE]..."

**Model (Internal Monologue):** *I need to see the hidden patterns.*
**Model Call:** `drugs({ catalyst: "...", binding: "...", texture: "..." })`

**Model:** "I have scanned the binary..."

---

*"The interface is the ritual. The prompt is the spell."*
