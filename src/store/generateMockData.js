const TOPIC_TITLES = [
  'The Last Garden',
  'Neon Drifters',
  'The Cartographer\'s Daughter',
  'Iron & Silk',
  'Echoes of Meridian',
  'The Saltwater Journals',
  'Phantom Frequency',
  'Under the Copper Sun',
  'The Glassblower\'s War',
  'Binary Lullaby',
];

// Stable picsum IDs for consistent images across reloads
const TOPIC_IMAGE_IDS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const CHAPTER_IMAGE_IDS = [
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const CHAPTER_PREFIXES = [
  'The Beginning', 'Awakening', 'Crossroads', 'The Descent',
  'Revelations', 'Echoes', 'The Turn', 'Fractures',
  'Convergence', 'The Weight', 'Unraveling', 'The Reckoning',
];

const IDEA_TITLES = [
  'Setting the scene', 'Character introduction', 'Building tension',
  'The inner conflict', 'A turning point', 'Dialogue & confrontation',
  'Quiet reflection', 'Rising stakes', 'The revelation',
  'Aftermath', 'A new resolve', 'Foreshadowing',
  'The journey begins', 'Bonds tested', 'Unexpected ally',
  'Moment of doubt', 'Hidden truth', 'The cost of silence',
  'Crossing the threshold', 'What was left behind',
];

const CHAPTER_DESCRIPTIONS = [
  'We open on a quiet morning that masks the turmoil beneath. The protagonist steps into a world they thought they understood, only to realize the rules have shifted overnight. Old routines crumble as a single unexpected encounter sets everything in motion, leaving no room for the comfort of yesterday.',
  'Something stirs beneath the surface, a restlessness that cannot be named. The characters begin to sense that the ground beneath them is no longer solid. Conversations carry double meanings, glances linger too long, and the air itself feels charged with the electricity of impending change.',
  'Two paths diverge and the choice between them defines everything that follows. Loyalties are tested as alliances shift in unexpected directions. What once seemed like a clear moral compass now spins wildly, forcing each character to confront the gap between who they are and who they pretend to be.',
  'The descent is swift and merciless, pulling characters into darker territory than they imagined possible. Trust erodes like sand beneath a rising tide. Secrets that were buried with care begin to surface, and the consequences of past decisions arrive with terrible precision and unyielding force.',
  'Truths emerge from shadows, some liberating and others devastating beyond measure. Characters must reckon with revelations that reshape their understanding of every event that came before. The narrative peels back its layers to expose the raw machinery of motive, betrayal, and reluctant courage.',
  'The past reverberates through the present like sound through an empty cathedral. Characters encounter reflections of earlier choices, distorted by time and regret. Patterns repeat with variations that are both comforting and deeply unsettling, suggesting that escape from history may be nothing more than an elaborate illusion.',
  'Everything pivots on a single moment of decision that cannot be undone once taken. The story shifts direction with the force of a river changing course after a landslide. Characters who were allies become obstacles, and those who seemed irrelevant step into positions of unexpected and uncomfortable power.',
  'Cracks widen into chasms as relationships buckle under accumulated pressure and unspoken resentment. The structures that held the world together, whether personal, social, or political, begin to fail in cascading sequence. Each fracture reveals something hidden in the foundation that was always there waiting.',
  'Separate threads of the story draw together with the inevitability of gravity pulling objects toward the earth. Characters who never expected to meet find their fates entangled in ways that feel both random and predestined. The narrative tightens like a knot being drawn closed by invisible hands.',
  'The full burden of consequence settles onto shoulders that may or may not be strong enough to bear it. Characters confront the accumulated weight of every compromise, every lie, every moment of cowardice and courage. The question is no longer what happened, but whether any of it can be survived.',
  'Things fall apart not with a dramatic explosion but with the quiet unraveling of threads pulled one by one. Certainties dissolve into ambiguity as the narrative refuses to offer easy answers or comfortable resolutions. Characters watch helplessly as the tapestry they wove comes undone at the seams.',
  'The final reckoning arrives not as judgment from above but as the natural consequence of everything that came before. Characters face their reflections in the mirror of their own actions and must decide what, if anything, can be salvaged from the wreckage they helped create with their own hands.',
];

const SENTENCE_POOL = [
  'The sky was a bruise of violet and amber when she finally stepped outside.',
  'He hadn\'t spoken to anyone in three days, and the silence was beginning to feel permanent.',
  'Rain hammered the tin roof like a thousand tiny fists demanding entry.',
  'She found the letter tucked inside a book she hadn\'t opened in years.',
  'The city lights blurred through the window of the moving train.',
  'There was a moment, just before dawn, when everything felt possible.',
  'He traced the scar on his palm and remembered how he got it.',
  'The old woman at the counter looked at him as if she already knew his story.',
  'Somewhere in the distance, a church bell rang eleven times.',
  'She pulled the collar of her coat tighter against the biting wind.',
  'The photograph was faded, but the faces were unmistakable.',
  'He sat on the edge of the dock, watching the tide slowly retreat.',
  'A single candle flickered on the windowsill, casting long shadows across the room.',
  'The forest was dense enough to swallow sound.',
  'She counted the steps to the door — fourteen, same as always.',
  'The market was alive with voices, colors, and the smell of roasted chestnuts.',
  'He opened the notebook to a page filled with someone else\'s handwriting.',
  'The road stretched ahead, empty and straight, disappearing into the heat shimmer.',
  'She pressed her forehead against the cool glass and closed her eyes.',
  'The coffee had gone cold, but she kept holding the mug anyway.',
  'He recognized the melody before he saw the musician playing it.',
  'The bridge swayed under their feet, and nobody dared to look down.',
  'She whispered something into the dark, not expecting an answer.',
  'The key didn\'t fit any lock in the house, and that was the problem.',
  'Fog rolled in from the harbor, erasing the skyline building by building.',
  'He folded the map along creases that had been worn smooth by years of use.',
  'The child tugged at her sleeve and pointed to something in the water.',
  'A door slammed somewhere above them, and dust rained from the ceiling.',
  'She tasted salt on her lips and realized she had been crying.',
  'The clock on the wall had stopped at 3:47, and no one could explain why.',
  'He walked the perimeter of the yard, checking each fence post by hand.',
  'The music from the radio was barely audible, just a ghost of a song.',
  'She sat cross-legged on the floor, surrounded by boxes she couldn\'t bring herself to open.',
  'The alley smelled of wet brick and something faintly sweet, like overripe fruit.',
  'He tapped the glass twice, and the fish inside scattered like startled thoughts.',
  'The train station was empty except for a man reading yesterday\'s newspaper.',
  'She ran her fingers along the spines of the books, looking for one in particular.',
  'The thunder came first, low and rolling, before the sky split open.',
  'He stared at the blank page until the blankness stared back.',
  'The stairs creaked under her weight, announcing her presence to the entire house.',
  'A pigeon landed on the railing and regarded him with one unblinking eye.',
  'She hadn\'t planned to stay this long, but leaving felt harder every day.',
  'The neon sign buzzed and flickered, casting the sidewalk in intermittent pink light.',
  'He found a coin in the gutter, dated the year his father was born.',
  'The soup was too hot, but she ate it anyway, needing the warmth.',
  'Shadows pooled in the corners of the room like dark water.',
  'She locked the door behind her and slipped the key under the mat.',
  'The horizon was a thin line of gold between the ocean and the clouds.',
  'He could hear the neighbors arguing through the wall, muffled but relentless.',
  'The dog followed her for three blocks before she finally knelt to pet it.',
  'A crack ran through the ceiling like a river on an upside-down map.',
  'She packed light — one bag, no souvenirs, no regrets.',
  'The streetlamp outside her window cast a circle of yellow on the wet pavement.',
  'He checked his watch, then checked it again, as if time might have changed its mind.',
  'The garden had gone wild in her absence, thorns reclaiming every path.',
  'She heard footsteps behind her but didn\'t turn around.',
  'The envelope was sealed with red wax, and she broke it with her thumbnail.',
  'He leaned against the doorframe, watching the snow fall in slow spirals.',
  'The river was higher than she remembered, swollen and urgent after the rains.',
  'A moth circled the porch light in tight, desperate loops.',
  'She stood at the intersection of two lives and chose neither.',
  'The server brought the wrong order, and he decided to eat it anyway.',
  'The paint was peeling from the shutters in long, curling strips.',
  'He read the sign three times before the words made sense.',
  'The telephone rang at 2 a.m., and she knew before she answered.',
  'Dust motes floated in the beam of sunlight like tiny golden planets.',
  'She bit her lip hard enough to taste copper.',
  'The parking lot was vast and empty, the lines fading to ghosts.',
  'He pulled the curtain aside just enough to see the car in the driveway.',
  'The attic smelled of cedar and forgotten things.',
  'She drew a circle in the condensation on the window and watched it drip away.',
  'The bus was late, as it always was on days that mattered.',
  'He pocketed the stone, smooth and warm from the sun.',
  'The hallway stretched longer than it had any right to.',
  'She noticed the crack in the mirror only after she looked away.',
  'The cat watched him from the top of the bookshelf with sovereign indifference.',
  'He hadn\'t expected the door to be unlocked, but it was.',
  'The taste of the apple was sharp and perfect, like a memory of summer.',
  'She folded the napkin into a crane and left it beside the empty plate.',
  'The rooftop offered a view of everything and an escape from nothing.',
  'He wrote her name in the margin and then scratched it out.',
  'The grass was wet with dew, soaking through her shoes in seconds.',
  'She studied the map as if the lines themselves could tell her where to go.',
  'The bar was closing, and the last song was always the saddest.',
  'He buttoned his coat slowly, delaying the moment he\'d have to step outside.',
  'The wall was covered in photographs, none of them labeled.',
  'She set down the phone without saying goodbye.',
  'The wind carried the scent of jasmine from a garden she couldn\'t see.',
  'He opened every drawer in the desk, finding nothing but dust and paperclips.',
  'The elevator stopped between floors, and the lights went out.',
  'She stood at the water\'s edge, letting the waves lap over her bare feet.',
  'The receipt in his pocket was the only proof the evening had happened.',
  'A bicycle leaned against the fence, its front wheel still spinning.',
  'She traced the outline of the country on the globe, her finger crossing oceans.',
  'The candle burned down to a stub, and neither of them moved to replace it.',
  'He listened to the voicemail twice, trying to decode what wasn\'t said.',
  'The field was golden and endless, bending under a wind that smelled like rain.',
  'She set the timer and walked away, trusting the process.',
  'The gravel crunched under the tires as the car pulled into the driveway.',
  'He caught his reflection in the shop window and barely recognized himself.',
  'The ink had bled through the paper, turning words into Rorschach tests.',
  'She closed the book mid-sentence and never opened it again.',
  'The chimney released a thin ribbon of smoke into the pewter sky.',
  'He counted the rings on the stump — forty-seven years, gone in an afternoon.',
  'The first snowflake landed on her eyelash, and she laughed for no reason.',
  'The silence between them was the kind that had weight.',
  'She peeled the label off the bottle in thin, nervous strips.',
  'The lighthouse beam swept across the water in slow, patient arcs.',
  'He found a feather on the pillow and wondered which bird had left it.',
  'The stairwell echoed with the sound of someone running.',
  'She adjusted the rearview mirror and saw the town shrinking behind her.',
  'The tea tasted like smoke and honey, an impossible combination that worked.',
  'He stood at the threshold, one foot in and one foot out.',
  'The vines had climbed the trellis and reached the second-story window.',
  'She picked up the broken pieces and arranged them in a new order.',
  'The morning was so still she could hear the earth breathing.',
];

const ALT_SENTENCES = [
  'The sky had turned to rust and indigo by the time she emerged.',
  'Three days of silence had made him question whether words still worked.',
  'The rain struck the roof with a fury that felt almost personal.',
  'Inside a forgotten book, she discovered a letter she was never meant to find.',
  'City lights bled together through the rain-streaked window of the last train.',
  'In the hush before dawn, the world felt like an empty stage.',
  'The scar on his hand was a story written in healed skin.',
  'The shopkeeper studied him with eyes that held too much understanding.',
  'Eleven chimes echoed from a church whose steeple was lost in fog.',
  'Wind cut through her coat as if the fabric were made of wishes.',
  'Time had drained the color from the photo, but not the truth.',
  'Perched at the dock\'s edge, he watched the sea slowly claim the sand.',
  'One stubborn candle held the darkness at bay from its post on the sill.',
  'The trees crowded so close that daylight became a rumor.',
  'Fourteen steps to the door — she\'d memorized them years ago.',
  'The bazaar hummed with life: haggling voices, bright cloth, the haze of spice smoke.',
  'The handwriting in the notebook belonged to a stranger, or perhaps a ghost.',
  'Ahead, the road ran ruler-straight into a trembling wall of heat.',
  'She leaned her brow against the glass and let the cold seep in.',
  'The coffee was stone-cold, but the mug was the warmest thing she had.',
];

let idCounter = 0;
function uid(prefix) {
  return `${prefix}-${++idCounter}`;
}

function pick(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSentenceBlock(order, pool, altPool) {
  const id = uid('sb');
  const mainText = pool[order % pool.length];
  const hasAlt = Math.random() > 0.55;
  const activeId = uid('v');
  const versions = [{ id: activeId, text: mainText }];

  if (hasAlt) {
    const altText = altPool[order % altPool.length];
    versions.push({ id: uid('v'), text: altText });
    if (Math.random() > 0.7) {
      versions.push({ id: uid('v'), text: pool[(order + 7) % pool.length] });
    }
  }

  return {
    id,
    order,
    activeVersionId: activeId,
    versions,
  };
}

const EXAMPLE_TITLES = [
  'Street café at dusk', 'Crowded subway platform', 'Abandoned warehouse interior',
  'Hospital waiting room', 'Rooftop garden at sunrise', 'Rainy window reflections',
  'Market stall close-up', 'Old library reading room', 'Ferry crossing at night',
  'Kitchen table morning light', 'Foggy bridge walkway', 'Courtyard with laundry lines',
];

const EXAMPLE_IMAGE_IDS = [
  100, 101, 102, 103, 104, 106, 107, 108, 109, 110, 111, 112,
];

function generateIdea(order, sentenceCount, globalOffset, chapterOrder) {
  const blocks = [];
  for (let i = 0; i < sentenceCount; i++) {
    blocks.push(
      generateSentenceBlock(globalOffset + i, SENTENCE_POOL, ALT_SENTENCES)
    );
  }
  return {
    id: uid('idea'),
    type: 'idea',
    title: IDEA_TITLES[(chapterOrder * 6 + order) % IDEA_TITLES.length],
    order,
    collapsed: false,
    sentenceBlocks: blocks,
  };
}

function generateExample(order, chapterOrder) {
  const idx = (chapterOrder * 3 + order) % EXAMPLE_TITLES.length;
  const imageId = EXAMPLE_IMAGE_IDS[idx % EXAMPLE_IMAGE_IDS.length];
  return {
    id: uid('idea'),
    type: 'example',
    title: EXAMPLE_TITLES[idx],
    order,
    collapsed: false,
    image: `https://picsum.photos/id/${imageId}/600/400`,
    caption: '',
    sentenceBlocks: [],
  };
}

function generateChapter(order) {
  const title = `Chapter ${order + 1}: ${CHAPTER_PREFIXES[order % CHAPTER_PREFIXES.length]}`;
  const ideaCount = randomInt(5, 6);
  const items = [];
  let sentenceOffset = order * 50;
  let itemOrder = 0;

  for (let i = 0; i < ideaCount; i++) {
    // Insert an example before the 2nd and 4th idea
    if (i === 1 || i === 3) {
      items.push(generateExample(itemOrder, order));
      itemOrder++;
    }
    const sentenceCount = randomInt(5, 8);
    items.push(generateIdea(itemOrder, sentenceCount, sentenceOffset, order));
    itemOrder++;
    sentenceOffset += sentenceCount;
  }

  return {
    id: uid('ch'),
    title,
    order,
    description: CHAPTER_DESCRIPTIONS[order % CHAPTER_DESCRIPTIONS.length],
    image: `https://picsum.photos/id/${CHAPTER_IMAGE_IDS[order % CHAPTER_IMAGE_IDS.length]}/400/300`,
    ideas: items,
  };
}

function generateScript(topicIndex) {
  const chapters = [];
  for (let c = 0; c < 12; c++) {
    chapters.push(generateChapter(c));
  }
  return {
    id: uid('script'),
    title: TOPIC_TITLES[topicIndex],
    image: `https://picsum.photos/id/${TOPIC_IMAGE_IDS[topicIndex % TOPIC_IMAGE_IDS.length]}/400/300`,
    chapters,
  };
}

export function generateAllScripts() {
  idCounter = 0;
  return TOPIC_TITLES.map((_, i) => generateScript(i));
}
