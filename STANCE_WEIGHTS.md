# Stance Pool Weighting System

## How It Works

Each MCP server initialization randomly selects stance examples using a tiered probability system. Instead of showing all 45 pools every time, we vary which pools appear based on their tier.

## Tiers

### Always (100% probability, 1-2 samples)
**Core voices that should always be present:**
- `technicalEmpirical` - Gwern, Dan Luu, matklad, etc.
- `philosophy` - Wittgenstein, Barad, Haraway, etc.
- `blackRadicalThought` - Baldwin, Davis, Moten, Hartman, etc.
- `folkWisdom` - Sysadmins, librarians, union organizers

**Expected: 4-8 stances per invocation from these pools**

### Usually (70% probability, 1 sample)
**Frequent enrichment - appear most of the time:**
- `systemsInfrastructure` - Hickey, Lamport, Kingsbury
- `craftMaking` - Ingold, Alexander, Kimmerer
- `embodiment` - Gendlin, van der Kolk, Feldenkrais
- `poetry` - Rankine, Vuong, Ross Gay
- `literary` - Didion, Baldwin, Delany
- `scienceResearch` - Feynman, Sacks, McClintock
- `transfeminist` - Stone, Stryker, Halberstam
- `indigenousKnowledge` - Kimmerer, Simpson, Yunkaporta

**Expected: ~5-6 of these 8 pools per invocation**

### Sometimes (40% probability, 1 sample)
**Occasional perspectives - enrich about half the time:**
- `musicSound` - Oliveros, Cage, Björk
- `visualArts` - Walker, Martin, Basquiat
- `filmCinema` - Varda, Reichardt, Jenkins
- `disabilityCulture` - Wong, Mingus, Clare
- `transformativeJustice` - brown, Kaba, Thom
- `teachingPedagogy` - hooks, Freire, Palmer
- `ecologyAgriculture` - Fukuoka, Shiva, Tsing
- `asianAmericanVoices` - Hong, Vuong, Zhang
- `latinxVoices` - Anzaldúa, Machado, Luiselli
- `relational` - Perel, hooks, Gottman
- `strategic` - Venkat Rao, Scott, Taleb
- `organizingPragmatic` - brown, McCabe, Newport
- `anarchismAutonomy` - Graeber, Le Guin, Solnit
- `economicsLabor` - Graeber, Raworth, McAlevey
- `speculativeFiction` - Le Guin, Butler, Jemisin

**Expected: ~6 of these 15 pools per invocation**

### Rare (20% probability, 1 sample)
**Specialized contexts - appear occasionally for surprise:**
- `comedyHumor` - Gadsby, Bamford, Mulaney
- `absurdist` - @dril
- `mysticismContemplation` - Thích Nhất Hạnh, Pema Chödrön
- `foodCooking` - M.F.K. Fisher, Samin Nosrat
- `fashionStyle` - Rick Owens, Rei Kawakubo
- `photography` - Sontag, Arbus, Parks
- `danceChoreography` - Pina Bausch, Bill T. Jones
- `gamesPlay` - Jonathan Blow, Avery Alder
- `hipHopRnb` - Questlove, Hanif Abdurraqib
- `journalismReportage` - Didion, Malcolm, Coates
- `performanceArt` - Abramović, Anderson
- `comicsGraphicNarrative` - Lynda Barry, Spiegelman
- `internetDigitalCulture` - Jenny Odell, danah boyd
- `architectureSpace` - Jacobs, Koolhaas, Brand
- `community` - r/ADHD, Captain Awkward
- `archetype` - 58yo Ohio sysadmin
- `designFiction` - Bruce Sterling

**Expected: ~3-4 of these 17 pools per invocation**

## Total Per Invocation

**Expected stance count: 8-15 stances**
- Minimum: ~8 (if rare pools don't hit)
- Average: ~12
- Maximum: ~18 (if all usually/sometimes pools hit + double samples from always)

## Variance & Discovery

Each invocation produces a different mix:
- **Core foundation**: Technical + philosophical + Black radical + folk always present
- **Rotating enrichment**: Usually/sometimes pools provide variety
- **Surprise elements**: Rare pools create unexpected combinations

This means:
- You'll always get grounding (technical, philosophical, folk wisdom)
- You'll usually get embodied/poetic/craft perspectives
- You'll sometimes get arts/organizing/ecology lenses
- You'll occasionally get delightful surprises (food, comedy, mysticism)

## Rationale

**Always tier**: Essential for most contexts, provide stable foundation

**Usually tier**: Core enrichment - embodiment, poetry, craft, systems thinking appear frequently enough to be familiar

**Sometimes tier**: Contextual depth - arts, organizing, specific cultural voices enrich without overwhelming

**Rare tier**: Surprise and delight - specialized domains that spark joy when they appear but don't need constant presence

## Adjusting Weights

To change frequency of any pool, edit `POOL_WEIGHTS` in `src/stances/index.ts`:

```typescript
const POOL_WEIGHTS: Record<string, PoolTier> = {
  musicSound: "sometimes", // Change to "usually" for more music
  gamesPlay: "rare",       // Change to "sometimes" for more games
  // ...
};
```

To change probabilities themselves:

```typescript
const TIER_PROBABILITIES: Record<PoolTier, number> = {
  always: 1.0,   // 100%
  usually: 0.7,  // 70% - could increase to 0.8
  sometimes: 0.4, // 40% - could increase to 0.5
  rare: 0.2,     // 20% - could increase to 0.3
};
```
