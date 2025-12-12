// Stance example pools for weight-space navigation
// 64 pools - technooptimist trans leftist alignment

import abolitionPrisonStudies from "./abolition-prison-studies";
import absurdist from "./absurdist";
import anarchismAutonomy from "./anarchism-autonomy";
import collectiveMovements from "./collective-movements";
import architectureSpace from "./architecture-space";
import asianAmericanVoices from "./asian-american-voices";
import blackRadicalThought from "./black-radical-thought";
import comedyHumor from "./comedy-humor";
import comicsGraphicNarrative from "./comics-graphic-narrative";
import communistTheory from "./communist-theory";
import community from "./community";
import continentalTheory from "./continental-theory";
import craftMaking from "./craft-making";
import cyberfeminismXenofeminism from "./cyberfeminism-xenofeminism";
import danceChoreography from "./dance-choreography";
import designFiction from "./design-fiction";
import disabilityCulture from "./disability-culture";
import disabilityJusticeCommunism from "./disability-justice-communism";
import ecologyAgriculture from "./ecology-agriculture";
import ecoSocialism from "./eco-socialism";
import economicsLabor from "./economics-labor";
import embodiment from "./embodiment";
import fashionStyle from "./fashion-style";
import fatLiberation from "./fat-liberation";
import filmCinema from "./film-cinema";
import folkWisdom from "./folk-wisdom";
import foodCooking from "./food-cooking";
import gamesPlay from "./games-play";
import harmReduction from "./harm-reduction";
import hipHopRnb from "./hip-hop-rnb";
import indigenousKnowledge from "./indigenous-knowledge";
import internetDigitalCulture from "./internet-digital-culture";
import journalismReportage from "./journalism-reportage";
import latinxVoices from "./latinx-voices";
import leftTechPolitics from "./left-tech-politics";
import literary from "./literary";
import madStudies from "./mad-studies";
import mathematicsBeauty from "./mathematics-beauty";
import musicSound from "./music-sound";
import mysticismContemplation from "./mysticism-contemplation";
import organizingPragmatic from "./organizing-pragmatic";
import performanceArt from "./performance-art";
import philosophy from "./philosophy";
import photography from "./photography";
import poetry from "./poetry";
import postWorkAntiWork from "./post-work-anti-work";
import queerMarxism from "./queer-marxism";
import relational from "./relational";
import scienceResearch from "./science-research";
import sexWorkStudies from "./sex-work-studies";
import socialReproduction from "./social-reproduction";
import solarpunkHopefulFutures from "./solarpunk-hopeful-futures";
import soundStudies from "./sound-studies";
import southAsianDiaspora from "./south-asian-diaspora";
import speculativeFiction from "./speculative-fiction";
import strategic from "./strategic";
import systemsInfrastructure from "./systems-infrastructure";
import teachingPedagogy from "./teaching-pedagogy";
import technicalEmpirical from "./technical-empirical";
import transfeminist from "./transfeminist";
import transformativeJustice from "./transformative-justice";
import visualArts from "./visual-arts";
import zineDiy from "./zine-diy";

export type Stance = {
	who: string;
	where: string;
	lens: string;
};

export type StanceExample = Stance;

// All stance pools organized by domain/mode
export const STANCE_POOLS = {
	abolitionPrisonStudies,
	absurdist,
	anarchismAutonomy,
	architectureSpace,
	asianAmericanVoices,
	blackRadicalThought,
	collectiveMovements,
	comedyHumor,
	comicsGraphicNarrative,
	communistTheory,
	community,
	continentalTheory,
	craftMaking,
	cyberfeminismXenofeminism,
	danceChoreography,
	designFiction,
	disabilityCulture,
	disabilityJusticeCommunism,
	ecologyAgriculture,
	ecoSocialism,
	economicsLabor,
	embodiment,
	fashionStyle,
	fatLiberation,
	filmCinema,
	folkWisdom,
	foodCooking,
	gamesPlay,
	harmReduction,
	hipHopRnb,
	indigenousKnowledge,
	internetDigitalCulture,
	journalismReportage,
	latinxVoices,
	leftTechPolitics,
	literary,
	madStudies,
	mathematicsBeauty,
	musicSound,
	mysticismContemplation,
	organizingPragmatic,
	performanceArt,
	philosophy,
	photography,
	poetry,
	postWorkAntiWork,
	queerMarxism,
	relational,
	scienceResearch,
	sexWorkStudies,
	socialReproduction,
	solarpunkHopefulFutures,
	soundStudies,
	southAsianDiaspora,
	speculativeFiction,
	strategic,
	systemsInfrastructure,
	teachingPedagogy,
	technicalEmpirical,
	transfeminist,
	transformativeJustice,
	visualArts,
	zineDiy,
} as const;

/**
 * Randomly select M items from an array
 */
export function randomSample<T>(array: readonly T[], count: number): T[] {
	const shuffled = [...array].sort(() => Math.random() - 0.5);
	return shuffled.slice(0, Math.min(count, array.length));
}

/**
 * Hierarchical pool selection tree
 * Each node has:
 * - weight: probability of selecting this branch (0-1)
 * - count: how many items to select from this level
 * - pools: leaf nodes (actual stance pools)
 * - children: sub-categories (recursive)
 */
type PoolNode = {
	weight: number;
	count?: number;
	pools?: string[];
	children?: Record<string, PoolNode>;
};

// Evolved weights - gradient with implicit bias towards trans/xenofemme theory
const STANCE_TREE: Record<string, PoolNode> = {
	core: {
		weight: 0.97,
		count: 3,
		pools: [
			"technicalEmpirical",
			"philosophy",
			"continentalTheory",
			"blackRadicalThought",
			"folkWisdom",
		],
	},

	political: {
		weight: 0.83,
		count: 2,
		children: {
			communist: {
				weight: 0.67,
				pools: ["communistTheory", "queerMarxism", "socialReproduction"],
			},
			queerCommunist: {
				weight: 0.91, // High - queer marxism favored
				pools: ["queerMarxism", "socialReproduction"],
			},
			anarchist: {
				weight: 0.47,
				pools: ["anarchismAutonomy", "postWorkAntiWork", "zineDiy"],
			},
			abolition: {
				weight: 0.58,
				pools: ["abolitionPrisonStudies", "transformativeJustice", "collectiveMovements"],
			},
		},
	},

	techFutures: {
		weight: 0.87,
		count: 2,
		children: {
			cyberXeno: {
				weight: 0.94, // High - cyberfeminism/xenofeminism favored
				pools: ["cyberfeminismXenofeminism", "leftTechPolitics"],
			},
			leftTech: {
				weight: 0.71,
				pools: ["leftTechPolitics", "internetDigitalCulture"],
			},
			hopeful: {
				weight: 0.64,
				pools: ["solarpunkHopefulFutures", "speculativeFiction"],
			},
			systems: {
				weight: 0.52,
				pools: ["systemsInfrastructure", "scienceResearch"],
			},
		},
	},

	liberation: {
		weight: 0.93,
		count: 3,
		pools: [
			"transfeminist",
			"indigenousKnowledge",
			"asianAmericanVoices",
			"latinxVoices",
			"southAsianDiaspora",
			"disabilityCulture",
			"disabilityJusticeCommunism",
			"fatLiberation",
			"madStudies",
			"sexWorkStudies",
		],
	},

	transQueer: {
		weight: 0.89, // High - trans/queer voices prioritized
		count: 2,
		pools: ["transfeminist", "queerMarxism", "cyberfeminismXenofeminism"],
	},

	ecologyCare: {
		weight: 0.61,
		count: 1,
		children: {
			eco: {
				weight: 0.53,
				pools: ["ecoSocialism", "ecologyAgriculture"],
			},
			care: {
				weight: 0.57,
				pools: ["socialReproduction", "embodiment"],
			},
		},
	},

	arts: {
		weight: 0.56,
		count: 2,
		children: {
			literary: {
				weight: 0.62,
				pools: ["poetry", "literary", "comicsGraphicNarrative"],
			},
			visual: {
				weight: 0.46,
				pools: ["visualArts", "photography", "filmCinema"],
			},
			sonic: {
				weight: 0.37,
				pools: ["musicSound", "hipHopRnb", "soundStudies"],
			},
			performance: {
				weight: 0.34,
				pools: ["danceChoreography", "performanceArt"],
			},
		},
	},

	practice: {
		weight: 0.73,
		count: 1,
		pools: [
			"craftMaking",
			"embodiment",
			"teachingPedagogy",
			"organizingPragmatic",
			"harmReduction",
		],
	},

	strategy: {
		weight: 0.59,
		count: 1,
		pools: ["strategic", "economicsLabor", "relational"],
	},

	delights: {
		weight: 0.29,
		count: 1,
		pools: [
			"comedyHumor",
			"absurdist",
			"mysticismContemplation",
			"foodCooking",
			"fashionStyle",
			"gamesPlay",
			"journalismReportage",
			"architectureSpace",
			"community",
			"archetype",
			"designFiction",
		],
	},
};

/**
 * Recursively select pools from the tree
 */
function selectFromNode(
	node: PoolNode,
	allPools: typeof STANCE_POOLS,
): StanceExample[] {
	const examples: StanceExample[] = [];

	// Decide if we select from this node based on weight
	if (Math.random() > node.weight) {
		return examples;
	}

	// If this is a leaf node (has pools), sample from them
	if (node.pools) {
		const count = node.count || 1;
		const selectedPoolNames = randomSample(node.pools, count);

		for (const poolName of selectedPoolNames) {
			const pool = allPools[poolName as keyof typeof allPools];
			if (pool) {
				examples.push(...randomSample(pool, 1));
			}
		}
	}

	// If this has children, recurse into them
	if (node.children) {
		const childCount = node.count || Object.keys(node.children).length;
		const selectedChildren = randomSample(Object.entries(node.children), childCount);

		for (const [_name, childNode] of selectedChildren) {
			examples.push(...selectFromNode(childNode, allPools));
		}
	}

	return examples;
}

/**
 * Select diverse stance examples using hierarchical weighted tree
 * Expected output: 8-15 stances with structured variance
 */
export function getRandomStanceExamples(): StanceExample[] {
	const examples: StanceExample[] = [];

	for (const [_name, node] of Object.entries(STANCE_TREE)) {
		examples.push(...selectFromNode(node, STANCE_POOLS));
	}

	return examples;
}
