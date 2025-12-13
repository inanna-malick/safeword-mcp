# Hierarchical Tree-Based Stance Selection

## Overview

Instead of flat weights, stances are organized in a **weighted tree** that groups related pools and selects recursively. This is more token-efficient and semantically meaningful.

## Structure

```typescript
{
  category: {
    weight: 0.8,      // Probability this branch is selected
    count: 2,         // How many children to select
    children: {       // Sub-categories (recursive)
      subcategory: {
        weight: 0.6,
        pools: ["pool1", "pool2"]  // Leaf nodes
      }
    }
  }
}
```

## Current Tree (55 pools total)

### Core (weight: 1.0, count: 3)
**Always selects 3 from:**
- technicalEmpirical
- philosophy
- blackRadicalThought
- folkWisdom

### Political (weight: 0.8, count: 2)
**Usually selects 2 sub-branches:**
- **communist** (0.6): communistTheory, queerMarxism, socialReproduction
- **anarchist** (0.4): anarchismAutonomy, postWorkAntiWork
- **abolition** (0.5): abolitionPrisonStudies, transformativeJustice

### Tech & Futures (weight: 0.8, count: 2)
**Usually selects 2 sub-branches:**
- **leftTech** (0.7): leftTechPolitics, cyberfeminismXenofeminism, internetDigitalCulture
- **hopeful** (0.6): solarpunkHopefulFutures, speculativeFiction
- **systems** (0.5): systemsInfrastructure, scienceResearch

### Liberation (weight: 0.9, count: 3)
**Usually selects 3 from:**
- transfeminist
- indigenousKnowledge
- asianAmericanVoices
- latinxVoices
- disabilityCulture
- disabilityJusticeCommunism

### Ecology & Care (weight: 0.6, count: 1)
**Sometimes selects 1 sub-branch:**
- **eco** (0.5): ecoSocialism, ecologyAgriculture
- **care** (0.5): socialReproduction, embodiment

### Arts (weight: 0.5, count: 2)
**Sometimes selects 2 sub-branches:**
- **literary** (0.6): poetry, literary, comicsGraphicNarrative
- **visual** (0.4): visualArts, photography, filmCinema
- **sonic** (0.3): musicSound, hipHopRnb
- **performance** (0.3): danceChoreography, performanceArt

### Practice (weight: 0.7, count: 1)
**Usually selects 1 from:**
- craftMaking
- embodiment
- teachingPedagogy
- organizingPragmatic

### Strategy (weight: 0.6, count: 1)
**Sometimes selects 1 from:**
- strategic
- economicsLabor
- relational

### Delights (weight: 0.3, count: 1)
**Rarely selects 1 from:**
- comedyHumor, absurdist, mysticismContemplation
- foodCooking, fashionStyle, gamesPlay
- journalismReportage, architectureSpace
- community, archetype, designFiction

## Selection Algorithm

```
for each top-level category:
  if random() < category.weight:
    if category has pools:
      select `count` pools randomly
      sample 1 stance from each pool
    if category has children:
      select `count` children randomly
      recurse into each selected child
```

## Expected Output

**Per invocation: 8-16 stances**

Typical distribution:
- 3 core stances (technical/philosophy/Black radical)
- 2-3 political theory stances (communist/anarchist/abolition mix)
- 2-3 tech/futures stances (left tech/solarpunk/systems)
- 2-3 liberation voices (trans/Indigenous/disability/PoC)
- 0-2 arts stances (literary/visual/sonic/performance)
- 0-1 ecology/care stance
- 0-1 practice stance
- 0-1 strategy stance
- 0-1 delight stance

## Ideological Alignment

**Technooptimist trans leftist**
- Pro-technology, pro-progress (not luddite)
- Trans liberation, queer communism centered
- Anti-capitalist, abolitionist, decolonial
- Explicitly excludes grey tribe/right-libertarian/race science voices

## Advantages Over Flat Weights

1. **Semantic grouping** - Related pools cluster meaningfully
2. **Hierarchical selection** - "Select 2 political stances" is clearer than individual pool weights
3. **Token efficiency** - Tree structure is more compact than flat list
4. **Easier tuning** - Adjust category weights instead of 55 individual weights
5. **Guaranteed diversity** - Each invocation gets political + technical + liberation voices

## Tuning the Tree

To adjust frequency:

```typescript
// Make communist theory appear more often
communist: { weight: 0.8 }  // was 0.6

// Get more arts stances
arts: { weight: 0.7, count: 3 }  // was 0.5, count 2

// Reduce delights
delights: { weight: 0.2 }  // was 0.3
```

## New Pools Added This Session

**Communist theory:** Fisher, Luxemburg, Gramsci, Federici, CLR James
**Cyberfeminism:** Haraway, Sadie Plant, VNS Matrix, Legacy Russell, Laboria Cuboniks
**Queer Marxism:** Feinberg, Hocquenghem, Mieli, Jules Gleeson, Shon Faye
**Solarpunk futures:** KSR, Becky Chambers, Ruthanna Emrys, Cory Doctorow
**Eco-socialism:** Andreas Malm, Jason W. Moore, Kohei Saito, Murray Bookchin
**Abolition:** Mariame Kaba, Ruth Wilson Gilmore, Dan Berger, Critical Resistance
**Social reproduction:** Silvia Federici, Sophie Lewis, The Care Collective
**Left tech politics:** Cory Doctorow, McKenzie Wark, Benjamin Bratton, Ruha Benjamin
**Post-work:** Kathi Weeks, David Frayne, Bob Black, André Gorz
**Disability justice communism:** Beatrice Adler-Bolton, Artie Vierkant (Death Panel)

Total: **55 pools, ~500+ stances, explicitly leftist**
