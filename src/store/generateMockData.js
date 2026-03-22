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
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
  44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
];

// Each topic gets its own unique set of 12 chapter names
const TOPIC_CHAPTERS = [
  // 0: The Last Garden
  ['Seeds of Memory', 'Root and Stone', 'The Overgrown Path', 'Petals in Ash',
   'The Gardener\'s Secret', 'Thorns and Honey', 'Wilting Season', 'The Greenhouse',
   'Soil and Bone', 'Bloom After Rain', 'The Pruning', 'Last Harvest'],
  // 1: Neon Drifters
  ['Voltage City', 'Circuit Breaker', 'Chrome Alley', 'The Glitch',
   'Neon Pulse', 'Wired Ghosts', 'The Hack', 'Digital Exodus',
   'Blackout Protocol', 'Signal Lost', 'The Grid', 'Neon Requiem'],
  // 2: The Cartographer's Daughter
  ['Unmarked Territory', 'The First Compass', 'Borderlines', 'Longitude of Loss',
   'The Missing Island', 'Contour Lines', 'True North', 'Dead Reckoning',
   'The Projection', 'Uncharted Waters', 'The Legend Key', 'Edge of the Map'],
  // 3: Iron & Silk
  ['The Forge Awakens', 'Threads of Power', 'Steel and Whisper', 'The Weaver\'s Blade',
   'Anvil Song', 'Silk Road Shadows', 'Tempered Edge', 'The Loom War',
   'Molten Oath', 'Fabric of Empire', 'The Final Stitch', 'Iron Crown'],
  // 4: Echoes of Meridian
  ['The First Echo', 'Meridian Rising', 'Sound and Fury', 'The Resonance Chamber',
   'Harmonic Drift', 'Shattered Frequency', 'The Amplifier', 'Wavelength',
   'Dissonance', 'The Tuning Fork', 'Reverb', 'Final Echo'],
  // 5: The Saltwater Journals
  ['Tide Log One', 'The Lighthouse Keeper', 'Barnacle Hearts', 'Riptide Confessions',
   'The Deep Shelf', 'Salt and Ink', 'Anchor Points', 'The Mariner\'s Code',
   'Coral Memory', 'Storm Ledger', 'The Last Buoy', 'Ocean\'s Testament'],
  // 6: Phantom Frequency
  ['Static Begins', 'The Dead Channel', 'White Noise', 'Broadcast Unknown',
   'The Receiver', 'Interference Patterns', 'Ghost Signal', 'The Antenna',
   'Transmission Lost', 'Pirate Wavelength', 'The Oscillator', 'Sign Off'],
  // 7: Under the Copper Sun
  ['Dawn of Copper', 'Desert Crossing', 'The Oasis Mirage', 'Sunstroke',
   'The Caravan', 'Sandstone Secrets', 'Copper Veins', 'The Nomad\'s Prayer',
   'Heat Shimmer', 'The Well Runs Dry', 'Dune Walker', 'Sunset Empire'],
  // 8: The Glassblower's War
  ['The First Bubble', 'Furnace Heart', 'Crystal Siege', 'The Shatter Point',
   'Blown Glass Army', 'The Kiln Council', 'Fracture Lines', 'Molten Strategy',
   'The Mirror Shield', 'Shard Rain', 'The Annealing', 'Glass Throne'],
  // 9: Binary Lullaby
  ['Zero Hour', 'The First Bit', 'Logic Gates', 'Recursive Dreams',
   'The Algorithm', 'Memory Leak', 'Stack Overflow', 'The Compiler',
   'Boolean Heart', 'Debug Mode', 'The Kernel', 'Shutdown Sequence'],
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

// Each topic gets its own thematic descriptions (12 per topic)
const TOPIC_DESCRIPTIONS = [
  // 0: The Last Garden
  [
    'The garden was once the pride of the estate, a living tapestry of color and fragrance that drew visitors from across the country. Now the iron gates hang rusted and the paths have surrendered to creeping ivy and wild thistle.',
    'Beneath the tangled roots of the oldest oak, something stirs. The gardener kneels in the soil each morning before dawn, whispering to seeds that may never sprout. Her patience is the kind that borders on madness or faith.',
    'The greenhouse stands fogged and dripping, a humid cathedral of forgotten experiments. Orchids that were never meant to survive this climate cling stubbornly to their pots, defying every prediction of their imminent demise.',
    'Petals fall like confetti after a celebration no one attended. The garden speaks in the language of decay and renewal, each wilted bloom making room for something unnamed and unexpected to push through the cracks.',
    'She guards her secrets the way she guards her rarest seedlings — behind locked doors and careful silence. The journal she keeps is filled not with words but with pressed flowers, each one a chapter of a story only she can read.',
    'The bees have returned after years of absence, drawn by a scent that shouldn\'t exist. Honey drips from combs built in the hollow walls of the potting shed, sweet and golden and faintly electric on the tongue.',
    'Autumn arrives without warning, stripping the canopy bare overnight. The gardener watches the leaves spiral down and knows that not everything can be saved. Some things must be allowed to fall so the roots can breathe.',
    'Glass panels catch the winter light and scatter it into rainbows across the stone floor. Inside the greenhouse, warmth persists like a stubborn memory, keeping alive what the world outside has already given up on.',
    'She digs with bare hands now, past topsoil and clay, searching for something planted long before her time. The bones of the garden run deeper than anyone suspects, hiding a foundation that was never meant to be found.',
    'After the long rains, the garden erupts in impossible color. Flowers bloom in combinations that defy taxonomy — crimson petals with cyan veins, leaves that shimmer silver in moonlight. Something has changed in the soil itself.',
    'She trims the hedges into shapes that tell stories, each cut deliberate and irreversible. The garden is her manuscript, and every branch she removes is an edit she cannot take back. Precision is her only luxury.',
    'The last harvest yields fruit that tastes of every season at once — spring sweetness, summer warmth, autumn spice, and a faint winter chill that lingers on the tongue long after swallowing.',
  ],
  // 1: Neon Drifters
  [
    'The city never sleeps but it pretends to, dimming its billion lights to a low simmer around 3 AM before surging back to full luminance. In the cracks between buildings, the drifters make their homes out of stolen electricity.',
    'Circuit boards litter the alley like fallen leaves in a digital autumn. She picks through them with tweezers and a headlamp, searching for the one chip that will complete the device she\'s been building for months.',
    'Chrome reflects chrome in an infinite regression of surfaces. The alley is a hall of mirrors where nothing is original and everything is a copy of a copy. Identity here is just another thing you can download.',
    'The glitch started small — a flickering streetlight, a stutter in the newsfeed, a face that appeared in every security camera for exactly one frame. Now it\'s spreading, rewriting the city\'s code from the inside out.',
    'Neon tubes pulse in rhythm with the city\'s heartbeat, a bass frequency so low you feel it in your teeth. The drifters navigate by color: blue for safe passage, red for danger, green for the markets that never close.',
    'They say the ghosts in the wires are just corrupted data, echoes of deleted users who refused to log out. But she\'s heard them whisper her name through the static, and corrupted data doesn\'t know your name.',
    'He hacks not for money or power but for the pure architecture of it — the elegance of finding a door where the builders forgot to put a wall. Every system has a seam, and he lives to find where the stitching frays.',
    'The exodus began when the central servers started rationing bandwidth like water in a drought. Thousands fled to the outer districts where the signal was weak but free, building mesh networks out of desperation and ingenuity.',
    'When the grid goes dark, the city reveals its true face — ancient brick and crumbling concrete beneath the holographic facades. For eight minutes the drifters see the world as it actually is, ugly and honest and real.',
    'She lost her signal three blocks from the safe house and had to navigate by memory alone. Without the overlay, the streets are just streets — no markers, no arrows, no friendly AI voice telling her where to turn.',
    'The grid is not a metaphor here. It\'s the literal infrastructure that separates the connected from the forgotten. To be off-grid is to be invisible, which is either a death sentence or the ultimate freedom.',
    'The final broadcast cuts through every frequency simultaneously — a lullaby played on synthesizers that sound almost human. The drifters stop and listen, knowing that whatever comes after the music will change everything.',
  ],
  // 2: The Cartographer's Daughter
  [
    'Her father\'s maps covered every wall of their small apartment, layers upon layers of hand-drawn coastlines and elevation contours. She learned to read topography before she learned to read words, tracing mountain ranges with her fingertip.',
    'The first compass she ever held was brass and broken, its needle spinning freely without settling on any direction. Her father said some compasses point not to north but to wherever you most need to go.',
    'Borders are just lines someone drew to claim what was never theirs. She traces the dotted boundaries between nations and wonders who decided that this river or that mountain should divide one people from another.',
    'She calculates the longitude of every place she\'s lost something — a glove in Prague, her confidence in Buenos Aires, her belief in certainties somewhere over the Atlantic at thirty thousand feet.',
    'The island appeared on her father\'s oldest map but on no other. She\'s spent three years searching for it, following coordinates that lead to open water and the nagging suspicion that some places exist only for those who need them.',
    'Contour lines are the fingerprints of the earth, and she reads them the way a detective reads a crime scene. Every ridge and valley tells a story of pressure, erosion, and the slow patience of geological time.',
    'True north is a convention, not a fact. The magnetic pole wanders like a restless traveler, and the maps must be redrawn every few years to account for a planet that refuses to hold still.',
    'Dead reckoning is the art of knowing where you are by remembering where you\'ve been. She navigates her life this way — no GPS, no landmarks, just the accumulated distance of every step she\'s ever taken.',
    'Every map projection distorts something — size, shape, distance, direction. You cannot flatten a sphere without lying. She wonders if the same is true of memory, whether any recollection can be trusted to be proportional.',
    'The waters beyond the mapped world are not empty but simply unrecorded. She sails past the last marked buoy into seas that have no names, where the depth charts are blank and the currents follow no known pattern.',
    'The legend key is the map\'s confession — a small box admitting that the blue lines are not really rivers and the green patches are not really forests. Everything is a symbol, and symbols are always incomplete.',
    'At the edge of the map, her father always drew the same thing: a small door. She asked him once what was on the other side, and he said that was the whole point of cartography — to make you want to find out.',
  ],
  // 3: Iron & Silk
  [
    'The forge has been burning for seven generations, its flame fed by a coal seam that runs beneath the entire mountain. The heat is so constant that the smiths have forgotten what cold feels like.',
    'Silk arrives in bolts from the eastern provinces, each one dyed with pigments extracted from insects and minerals that take decades to accumulate. A single thread can be traced back through a chain of forty hands.',
    'Steel whispers when it\'s ready to be shaped — a faint harmonic that only the most experienced smiths can hear. She learned to listen before she learned to hammer, pressing her ear against the cooling metal.',
    'The weaver\'s blade is neither weapon nor tool but something in between. It cuts thread with surgical precision and can be thrown with accuracy across a room. Every weaver carries one, though few admit why.',
    'The anvil sings with each strike, a percussive melody that echoes through the mountain corridors. Apprentices learn rhythm before technique, hammering patterns that have been passed down through oral tradition for centuries.',
    'The Silk Road was never a road but a web — threads of commerce and espionage stretching across continents, carrying not just fabric but secrets woven into the patterns themselves.',
    'A tempered blade holds its edge through battles that would shatter lesser steel. She tests each one by cutting a silk scarf dropped from shoulder height. If the fabric parts without resistance, the blade is worthy.',
    'The great looms stand three stories tall, operated by teams of twelve who work in shifts around the clock. The tapestry they weave tells the history of the war in threads of crimson and gold.',
    'The oath is sealed in molten metal, poured into a mold shaped like two clasped hands. When it cools, each party takes half, and the break line is unique — a signature that cannot be forged.',
    'An empire is just a pattern repeated across enough territory. She sees it in the textiles — the same motif appearing in markets a thousand miles apart, a visual language of conquest disguised as decoration.',
    'The final stitch closes the garment and the chapter. She bites the thread clean and holds the finished piece to the light, searching for flaws that would be invisible to anyone else.',
    'The iron crown is lighter than it looks, but heavier than it should be. Every ruler who has worn it says the same thing — it fits perfectly, and it never stops pressing.',
  ],
  // 4: Echoes of Meridian
  [
    'The first echo was recorded on a wax cylinder in 1887 — a voice speaking words in a language no one recognized. The cylinder was found in the ruins of Meridian, and the voice has never been identified.',
    'Meridian rises from the desert like a fever dream of architecture, its towers built at angles that defy structural logic. The city hums at a frequency just below human hearing, felt in the chest like a second heartbeat.',
    'Sound travels differently here, bending around corners and arriving before its source. Conversations overlap with their own echoes, creating harmonies that make it impossible to tell which words were spoken first.',
    'The resonance chamber beneath the central tower amplifies whispers into thunder. Secrets spoken there cannot be contained — they leak through the stone walls and drift through the city like dandelion seeds.',
    'She studies the drift patterns of sound the way oceanographers study currents. Harmonic tides rise and fall with the temperature, and certain corners of the city go silent at noon while others crescendo.',
    'The old frequency shattered every piece of glass in the eastern quarter. Windows, mirrors, spectacles, and drinking glasses all exploded simultaneously. The silence that followed was the loudest thing anyone had ever heard.',
    'The amplifier was built to communicate across the desert, but it picked up signals from somewhere else entirely. The transmissions are mathematical — prime number sequences that arrive at intervals no algorithm can predict.',
    'Every surface in Meridian vibrates at its own wavelength. Touch a wall and feel the history of every sound that ever bounced off it. The stones remember music played centuries ago, trapped in their crystalline structure.',
    'Dissonance is not just unpleasant here — it\'s dangerous. Certain frequency combinations can crack foundations and shatter bone. The musicians of Meridian train for years before they\'re allowed to play in public.',
    'The tuning fork was found in the foundation stone, vibrating at a frequency that matches no known musical scale. When struck, it produces a tone that makes listeners weep without knowing why.',
    'Reverb in Meridian never fully decays. Every sound ever made in the city persists as a ghost vibration, layered upon billions of others. The accumulated noise of centuries creates a background hum that newcomers mistake for tinnitus.',
    'The final echo will outlast the city itself. When the last tower falls, the sound of its collapse will bounce between the remaining walls forever, gradually diminishing but mathematically never reaching zero.',
  ],
  // 5: The Saltwater Journals
  [
    'The first entry is dated November 3rd, written in ink that has faded to the color of weak tea. The handwriting is meticulous — the careful script of someone accustomed to writing on surfaces that won\'t hold still.',
    'The lighthouse keeper counts ships the way a shepherd counts sheep — not for inventory but for reassurance. Each vessel that passes safely is a small victory against the rocks that wait below the waterline.',
    'Barnacles grow on everything left still long enough — hulls, pilings, chains, and hearts. She\'s seen men come to the coast hard and cynical, only to be slowly colonized by the patience the ocean demands.',
    'The riptide confessions happen at low tide, when the retreating water pulls secrets from the sand like splinters from skin. Fishermen murmur to the waves, knowing the sea keeps confidences better than any priest.',
    'The deep shelf drops away two miles from shore, the ocean floor plunging from ankle-deep to abyssal in the space of a boat length. What lives below that line has never seen light and has no need for it.',
    'Salt preserves everything — fish, memories, grudges. She writes in saltwater ink that crystallizes on the page, each word encrusted with tiny mineral formations that catch the light like frozen tears.',
    'Anchor points are not just where you drop the hook but where you decide to stop drifting. She has mapped hers across the coastline — the cove where she first swam, the dock where she said goodbye.',
    'The mariner\'s code is unwritten because paper dissolves at sea. It lives in the muscle memory of knot-tying and the instinctive reading of cloud formations that precede storms by exactly four hours.',
    'Coral grows at the pace of memory — slowly, incrementally, building elaborate structures from almost nothing. She dives to the reef each summer and measures the growth, documenting a patience that puts human endeavors to shame.',
    'The storm ledger records not just weather but the damage it leaves behind. Missing shingles, uprooted trees, boats found miles from their moorings. Each entry reads like a crime report filed against the sky.',
    'The last buoy marks the boundary between charted and uncharted water. Beyond it, the maps are speculation and the depth readings are guesses. She\'s crossed it seven times, and each time the sea felt different.',
    'Her testament is written in salt and kelp and the accumulated weight of tides. The ocean does not remember us, she writes, but it remembers everything we did to it. And the ocean has a longer memory than guilt.',
  ],
  // 6: Phantom Frequency
  [
    'The static started on a Tuesday, a faint crackle in the background of every broadcast. Most people ignored it. She recorded it, slowed it down, and found words hiding in the white noise like fish beneath ice.',
    'Channel 0 doesn\'t exist on any official frequency allocation chart. But if you tune your receiver to exactly 27.185 MHz between midnight and 3 AM, you\'ll hear breathing. Just breathing. Steady and patient.',
    'White noise is not truly random — it contains patterns too subtle for conscious perception. She\'s trained herself to hear the structures within the static, the way a geologist sees layers in what others call dirt.',
    'The broadcast originates from coordinates that correspond to the middle of a wheat field in Kansas. There is no antenna there, no equipment, no explanation. Just wheat, swaying in patterns that match the signal\'s waveform.',
    'Her receiver is a Frankenstein assemblage of vacuum tubes and modern chips, built to pick up frequencies that conventional radios aren\'t designed to detect. It runs hot and smells of burning dust and possibility.',
    'Interference creates unintended harmonics — ghost signals born from the collision of two legitimate broadcasts. She catalogs these phantoms, each one a child of signals that never knew they would create something together.',
    'The ghost signal appears every seventeen days, lasting exactly four minutes and thirty-three seconds. It contains what sounds like music played backwards through a filter made of distance and decades.',
    'The antenna on her roof is the tallest structure in the neighborhood, a skeletal tower of aluminum and ambition. Neighbors complain about the aesthetics. She tells them beauty is just a frequency they haven\'t learned to tune to.',
    'Transmission lost is not an error message but a state of being. When the signal cuts out, she exists in a pocket of silence so absolute it has texture — thick and velvet and faintly oppressive.',
    'Pirates of the airwaves broadcast from moving vehicles, their signals Doppler-shifting as they drive. She triangulates their positions by the pitch changes, mapping their routes across the city like luminous threads.',
    'The oscillator generates the carrier wave — a pure tone that means nothing until modulated by information. She thinks about this often: how meaningless purity is, and how meaning requires contamination.',
    'The sign-off is the loneliest sound in broadcasting — a tone that says nothing more is coming, that the voice you relied on has chosen silence. She keeps her receiver on all night, just in case.',
  ],
  // 7: Under the Copper Sun
  [
    'Dawn comes in copper here, the sun rising through dust that hasn\'t settled since the last century. The light has weight — you can feel it pressing on your shoulders like a warm hand urging you to stay.',
    'The desert crossing takes three days if you know the path and forever if you don\'t. She\'s memorized the landmarks: the split boulder, the dead acacia, the patch of sand that\'s a slightly different shade of gold.',
    'The oasis exists on no map because it moves. Not literally, but the dunes around it shift with the seasonal winds, hiding and revealing it in a slow game of geological peek-a-boo that spans decades.',
    'Sunstroke does strange things to memory — it compresses years into seconds and stretches minutes into lifetimes. She lay in the shade of a rock and relived her entire childhood in the time it took to drink one cup of water.',
    'The caravan stretches for a quarter mile, a serpentine procession of camels and carts loaded with goods that have been traded along this route since before the concept of nations existed.',
    'Sandstone holds secrets in its layers — each stratum a page in a book that took millions of years to write. She reads the geology of the canyon walls like a diary, finding ancient seas in a land of sand.',
    'Copper runs through the earth here in veins thick enough to see with the naked eye. The miners follow them like surgeons, extracting metal that has been forming since the planet was young and molten.',
    'The nomad\'s prayer is spoken facing not east but whichever direction the wind comes from, on the theory that the divine travels on moving air and can be found wherever the atmosphere is in motion.',
    'Heat shimmers turn the horizon into a liquid surface, and distant objects float above the ground like memories detached from their origins. Nothing in the desert is where it appears to be.',
    'The well ran dry in the third year of drought, its water table retreating deeper into the earth like a creature burrowing away from predators. She measures the depth each morning, hoping for the number to shrink.',
    'Walking dunes move at a pace visible only in time-lapse — a meter per year, relentless and directional, swallowing everything in their path with the casual indifference of geological processes.',
    'The empire of the copper sun lasted four centuries and left behind nothing but ruins that glow orange at sunset. She photographs them at that exact moment, when the stones remember what it felt like to be powerful.',
  ],
  // 8: The Glassblower's War
  [
    'The first bubble is always the most dangerous — too much pressure and the glass explodes, too little and it collapses. She holds her breath as the sphere inflates, transparent and trembling like a soap bubble made of fire.',
    'The furnace burns at 2,000 degrees, hot enough to turn sand into liquid light. She works in its glow, her face illuminated by the molten glass that obeys her commands with liquid obedience.',
    'The siege was unconventional — no battering rams or catapults but a wall of crystal lenses that focused sunlight into beams capable of igniting wood at three hundred meters. The defenders had no word for such a weapon.',
    'Every piece of glass has a shatter point — a precise frequency that will cause it to vibrate apart. She maps these frequencies the way a general maps enemy positions, knowing that destruction requires the same precision as creation.',
    'They march in formation, each soldier carrying a shield of blown glass that is lighter than wood and harder than bronze. The army catches the light and scatters it in all directions, a dazzling spectacle that is also a weapon.',
    'The kiln council meets by firelight, their faces reflected in the curved surfaces of cooling glassware. Decisions are made in the language of temperature and timing — when to heat, when to cool, when to break.',
    'Fracture lines follow the internal stresses of the glass, paths of least resistance that were invisible until the moment of breaking. She studies shattered pieces like a detective at a crime scene, reading the story of force.',
    'Strategy in glass is counterintuitive — the strongest shapes are the most curved, and flat panels are the weakest. She designs her defenses in spheres and arcs, architecture that distributes force like water distributes weight.',
    'The mirror shield reflects not just light but intent. Attackers see themselves in its surface and hesitate, confronted by their own aggression made visible. It is the most effective armor ever created, and it weighs almost nothing.',
    'Shards rain from the shattered dome like a lethal snowfall, each piece catching the light as it falls. The sound of glass breaking at this scale is not a crash but a sustained chord, almost musical in its destruction.',
    'Annealing is the process of controlled cooling, relieving internal stresses by allowing the glass to release its tension gradually. She applies the same principle to negotiations — slow, careful, letting the heat dissipate naturally.',
    'The glass throne is transparent, which makes the ruler visible from all angles with no place to hide. Every expression, every fidget, every moment of doubt is on display. Power and vulnerability are the same thing, seen through glass.',
  ],
  // 9: Binary Lullaby
  [
    'Zero hour is when the old system dies and the new one boots up. For three seconds the world runs on nothing — no code, no rules, no failsafes. Those three seconds feel like falling through a floor that was never solid.',
    'The first bit was either a zero or a one, and that single choice bifurcated reality into two possible futures. She often wonders what the world would look like if that original choice had gone the other way.',
    'Logic gates are the neurons of the machine — simple yes-or-no decisions that, aggregated by the billions, produce something that looks remarkably like thought. She builds them by hand, soldering certainty into silicon.',
    'In her dreams, the code writes itself in spiraling patterns that fold inward like origami. Each recursion produces a smaller, more detailed version of the whole, and she wakes knowing the solution without understanding the proof.',
    'The algorithm is elegant in the way a bridge is elegant — it solves a problem with the minimum possible material, each line of code load-bearing and essential. Remove any one and the structure collapses.',
    'Memory leaks are not failures but ghosts — processes that should have ended but didn\'t, consuming resources for tasks that no longer exist. She hunts them through the system like an exorcist following cold spots.',
    'The stack grows upward like a tower of decisions, each function call balanced on the one beneath it. When it overflows, the crash is spectacular — a cascade of unresolved operations that topples like dominos.',
    'The compiler translates human intention into machine instruction, a process that loses something in translation every time. She writes code knowing that what the machine understands is never exactly what she meant.',
    'A boolean heart knows only true and false, love and not-love, with no space for maybe. She envies its clarity sometimes, living as she does in the analog fog of human ambiguity where nothing is fully one thing.',
    'Debug mode reveals the hidden architecture of the program — every variable exposed, every decision branch visible. She wishes life had a debug mode, a way to step through choices one at a time and inspect the outcomes.',
    'The kernel is the core of the operating system, the foundation upon which everything else runs. It must be perfect because everything depends on it, and perfection is the heaviest burden any piece of code can bear.',
    'Shutdown sequence initiated. Processes terminate in reverse order of their importance, the trivial dying first and the essential last. She watches the indicators wink out like stars at dawn and wonders which light is hers.',
  ],
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

function generateIdea(order, sentenceCount, globalOffset, chapterOrder, topicIndex) {
  const blocks = [];
  for (let i = 0; i < sentenceCount; i++) {
    blocks.push(
      generateSentenceBlock(globalOffset + i, SENTENCE_POOL, ALT_SENTENCES)
    );
  }
  return {
    id: uid('idea'),
    type: 'idea',
    title: IDEA_TITLES[(topicIndex * 7 + chapterOrder * 6 + order) % IDEA_TITLES.length],
    order,
    collapsed: false,
    sentenceBlocks: blocks,
  };
}

function generateExample(order, chapterOrder, topicIndex) {
  const idx = (topicIndex * 5 + chapterOrder * 3 + order) % EXAMPLE_TITLES.length;
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

function generateChapter(order, topicIndex) {
  const chapterNames = TOPIC_CHAPTERS[topicIndex] || TOPIC_CHAPTERS[0];
  const title = `Chapter ${order + 1}: ${chapterNames[order % chapterNames.length]}`;
  const ideaCount = randomInt(5, 6);
  const items = [];
  // Offset sentences by topic so each topic has different content
  let sentenceOffset = topicIndex * 600 + order * 50;
  let itemOrder = 0;

  for (let i = 0; i < ideaCount; i++) {
    // Insert an example before the 2nd and 4th idea
    if (i === 1 || i === 3) {
      items.push(generateExample(itemOrder, order, topicIndex));
      itemOrder++;
    }
    const sentenceCount = randomInt(5, 8);
    items.push(generateIdea(itemOrder, sentenceCount, sentenceOffset, order, topicIndex));
    itemOrder++;
    sentenceOffset += sentenceCount;
  }

  const descriptions = TOPIC_DESCRIPTIONS[topicIndex] || TOPIC_DESCRIPTIONS[0];
  const imgIdx = (topicIndex * 5 + order) % CHAPTER_IMAGE_IDS.length;

  return {
    id: uid('ch'),
    title,
    order,
    description: descriptions[order % descriptions.length],
    image: `https://picsum.photos/id/${CHAPTER_IMAGE_IDS[imgIdx]}/400/300`,
    ideas: items,
  };
}

function generateScript(topicIndex) {
  const chapters = [];
  for (let c = 0; c < 12; c++) {
    chapters.push(generateChapter(c, topicIndex));
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
