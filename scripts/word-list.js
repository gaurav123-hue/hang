const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    // Additional words start here
    {
        word: "fountain",
        hint: "A structure that sends water into the air."
    },
    {
        word: "carousel",
        hint: "A rotating machine with seats for amusement rides."
    },
    {
        word: "quicksand",
        hint: "A deep, soft, wet area of sand that can swallow objects."
    },
    {
        word: "solar",
        hint: "Relating to the sun."
    },
    {
        word: "mermaid",
        hint: "A mythical creature with the upper body of a human and the lower body of a fish."
    },
    {
        word: "avalanche",
        hint: "A sudden and powerful snowslide."
    },
    {
        word: "helicopter",
        hint: "A type of aircraft with rotating blades that enable it to hover and move vertically and horizontally."
    },
    {
        word: "whirlpool",
        hint: "A swirling body of water produced by opposing currents."
    },
    {
        word: "tornado",
        hint: "A violent rotating column of air extending from a thunderstorm to the ground."
    },
    {
        word: "boulevard",
        hint: "A wide street in a city, typically lined with trees."
    },
    {
        word: "gondola",
        hint: "A narrow boat used in Venice, propelled by a person standing at the stern and rowing with a single oar."
    },
    {
        word: "tundra",
        hint: "A vast, flat, treeless Arctic region."
    },
    {
        word: "dolphin",
        hint: "A highly intelligent marine mammal with a streamlined body and a dorsal fin."
    },
    {
        word: "lighthouse",
        hint: "A tall tower with a light to guide ships at sea."
    },
    {
        word: "penguin",
        hint: "A flightless bird found in the Southern Hemisphere, known for its distinctive black and white coloring."
    },
    {
        word: "avalanche",
        hint: "A sudden and powerful snowslide."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "caterpillar",
        hint: "The larval stage of a butterfly or moth."
    },
    {
        word: "eclipse",
        hint: "The partial or complete obscuring of one celestial body by another."
    },
    {
        word: "tornado",
        hint: "A violent rotating column of air extending from a thunderstorm to the ground."
    },
    {
        word: "monsoon",
        hint: "A seasonal prevailing wind in the region of South and Southeast Asia, bringing heavy rain."
    },
    {
        word: "hurricane",
        hint: "A tropical cyclone with winds of 74 miles per hour or greater, typically accompanied by heavy rain and thunderstorms."
    },
    {
        word: "glacier",
        hint: "A large persistent body of ice moving slowly over land."
    },
    {
        word: "fog",
        hint: "A thick cloud of tiny water droplets suspended in the atmosphere near the ground."
    },
    {
        word: "comet",
        hint: "A celestial object consisting of a nucleus of ice and dust that becomes luminous as it passes near the sun."
    },
    {
        word: "magnet",
        hint: "An object that produces a magnetic field."
    },
    {
        word: "tsunami",
        hint: "A long high sea wave caused by an earthquake, submarine landslide, or other disturbance."
    },
    {
        word: "glow",
        hint: "To emit a steady light."
    },
    {
        word: "crater",
        hint: "A large, bowl-shaped cavity in the ground caused by the impact of a meteorite, volcanic activity, or an explosion."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "solar",
        hint: "Relating to the sun."
    },
    {
        word: "mermaid",
        hint: "A mythical creature with the upper body of a human and the lower body of a fish."
    },
    {
        word: "avalanche",
        hint: "A sudden and powerful snowslide."
    },
    {
        word: "helicopter",
        hint: "A type of aircraft with rotating blades that enable it to hover and move vertically and horizontally."
    },
    {
        word: "whirlpool",
        hint: "A swirling body of water produced by opposing currents."
    },
    {
        word: "tornado",
        hint: "A violent rotating column of air extending from a thunderstorm to the ground."
    },
    {
        word: "boulevard",
        hint: "A wide street in a city, typically lined with trees."
    },
    {
        word: "gondola",
        hint: "A narrow boat used in Venice, propelled by a person standing at the stern and rowing with a single oar."
    },
    {
        word: "tundra",
        hint: "A vast, flat, treeless Arctic region."
    },
    {
        word: "dolphin",
        hint: "A highly intelligent marine mammal with a streamlined body and a dorsal fin."
    },
    {
        word: "lighthouse",
        hint: "A tall tower with a light to guide ships at sea."
    },
    {
        word: "penguin",
        hint: "A flightless bird found in the Southern Hemisphere, known for its distinctive black and white coloring."
    },
    {
        word: "avalanche",
        hint: "A sudden and powerful snowslide."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "caterpillar",
        hint: "The larval stage of a butterfly or moth."
    },
    {
        word: "eclipse",
        hint: "The partial or complete obscuring of one celestial body by another."
    },
    {
        word: "tornado",
        hint: "A violent rotating column of air extending from a thunderstorm to the ground."
    },
    {
        word: "monsoon",
        hint: "A seasonal prevailing wind in the region of South and Southeast Asia, bringing heavy rain."
    },
    {
        word: "hurricane",
        hint: "A tropical cyclone with winds of 74 miles per hour or greater, typically accompanied by heavy rain and thunderstorms."
    },
    {
        word: "glacier",
        hint: "A large persistent body of ice moving slowly over land."
    },
    {
        word: "fog",
        hint: "A thick cloud of tiny water droplets suspended in the atmosphere near the ground."
    },
    {
        word: "comet",
        hint: "A celestial object consisting of a nucleus of ice and dust that becomes luminous as it passes near the sun."
    },
    {
        word: "magnet",
        hint: "An object that produces a magnetic field."
    },
    {
        word: "tsunami",
        hint: "A long high sea wave caused by an earthquake, submarine landslide, or other disturbance."
    },
    {
        word: "glow",
        hint: "To emit a steady light."
    },
    {
        word: "crater",
        hint: "A large, bowl-shaped cavity in the ground caused by the impact of a meteorite, volcanic activity, or an explosion."
    },
    // Feel free to continue adding more unique words and hints here...
    // Continuing from the previous list...

{
    word: "book",
    hint: "A written or printed work consisting of pages glued or sewn together along one side."
},
{
    word: "tree",
    hint: "A woody perennial plant, typically with a single stem or trunk growing to a considerable height."
},
{
    word: "cat",
    hint: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws."
},
{
    word: "dog",
    hint: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice."
},
{
    word: "house",
    hint: "A building for human habitation, especially one that is lived in by a family or small group of people."
},
{
    word: "car",
    hint: "A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people."
},
{
    word: "apple",
    hint: "The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh."
},
{
    word: "ball",
    hint: "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game."
},
{
    word: "sun",
    hint: "The star around which the Earth orbits, which provides light and heat for the Earth."
},
{
    word: "moon",
    hint: "The natural satellite of the Earth, visible (chiefly at night) by reflected light from the sun."
},
{
    word: "fish",
    hint: "A limbless cold-blooded vertebrate animal with gills and fins living wholly in water."
},
{
    word: "bird",
    hint: "A warm-blooded egg-laying vertebrate animal distinguished by the possession of feathers, wings, and a beak."
},
{
    word: "chair",
    hint: "A separate seat for one person, typically with a back and four legs."
},
{
    word: "table",
    hint: "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working."
},
{
    word: "phone",
    hint: "A device used for transmitting sound or speech to a distant point, especially by means of an electrical wire or radio waves."
},
{
    word: "clock",
    hint: "An instrument for measuring and indicating time, typically by hands moving over a dial."
},
{
    word: "pen",
    hint: "An instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder."
},
{
    word: "door",
    hint: "A hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle, or in the framework of a cupboard."
},
{
    word: "window",
    hint: "An opening in the wall or roof of a building or vehicle that is fitted with glass or other transparent material in a frame to admit light or air and allow people to see out."
},
{
    word: "key",
    hint: "A small piece of shaped metal with incisions cut to fit the wards of a particular lock, which is inserted into a lock and turned to open or close it."
},
{
    word: "book",
    hint: "A written or printed work consisting of pages glued or sewn together along one side."
},
{
    word: "tree",
    hint: "A woody perennial plant, typically with a single stem or trunk growing to a considerable height."
},
{
    word: "cat",
    hint: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws."
},
{
    word: "dog",
    hint: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice."
},
{
    word: "house",
    hint: "A building for human habitation, especially one that is lived in by a family or small group of people."
},
{
    word: "car",
    hint: "A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people."
},
{
    word: "apple",
    hint: "The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh."
},
{
    word: "ball",
    hint: "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game."
},
{
    word: "sun",
    hint: "The star around which the Earth orbits, which provides light and heat for the Earth."
},
{
    word: "moon",
    hint: "The natural satellite of the Earth, visible (chiefly at night) by reflected light from the sun."
},
{
    word: "fish",
    hint: "A limbless cold-blooded vertebrate animal with gills and fins living wholly in water."
},
{
    word: "bird",
    hint: "A warm-blooded egg-laying vertebrate animal distinguished by the possession of feathers, wings, and a beak."
},
{
    word: "chair",
    hint: "A separate seat for one person, typically with a back and four legs."
},
{
    word: "table",
    hint: "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working."
},
{
    word: "phone",
    hint: "A device used for transmitting sound or speech to a distant point, especially by means of an electrical wire or radio waves."
},
{
    word: "clock",
    hint: "An instrument for measuring and indicating time, typically by hands moving over a dial."
},
{
    word: "pen",
    hint: "An instrument for writing or drawing with ink, typically consisting of a metal nib or ball, or a nylon tip, fitted into a metal or plastic holder."
},
{
    word: "door",
    hint: "A hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle, or in the framework of a cupboard."
},
{
    word: "window",
    hint: "An opening in the wall or roof of a building or vehicle that is fitted with glass or other transparent material in a frame to admit light or air and allow people to see out."
},
{
    word: "key",
    hint: "A small piece of shaped metal with incisions cut to fit the wards of a particular lock, which is inserted into a lock and turned to open or close it."
},
// Feel free to continue adding more basic words and hints here...

];
