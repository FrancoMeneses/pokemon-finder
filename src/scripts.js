const ALLPOKEMON = [
    "Abomasnow",
    "Abomasnow mega",
    "Abra",
    "Absol",
    "Absol mega",
    "Accelgor",
    "Aegislash blade",
    "Aegislash shield",
    "Aerodactyl",
    "Aerodactyl mega",
    "Aggron",
    "Aggron mega",
    "Aipom",
    "Alakazam",
    "Alakazam mega",
    "Alcremie",
    "Alcremie gmax",
    "Alomomola",
    "Altaria",
    "Altaria mega",
    "Amaura",
    "Ambipom",
    "Amoonguss",
    "Ampharos",
    "Ampharos mega",
    "Anorith",
    "Appletun",
    "Appletun gmax",
    "Applin",
    "Araquanid",
    "Araquanid totem",
    "Arbok",
    "Arcanine",
    "Arcanine hisui",
    "Arceus",
    "Archen",
    "Archeops",
    "Arctovish",
    "Arctozolt",
    "Ariados",
    "Armaldo",
    "Aromatisse",
    "Aron",
    "Arrokuda",
    "Articuno",
    "Articuno galar",
    "Audino",
    "Audino mega",
    "Aurorus",
    "Avalugg",
    "Avalugg hisui",
    "Axew",
    "Azelf",
    "Azumarill",
    "Azurill",
    "Bagon",
    "Baltoy",
    "Banette",
    "Banette mega",
    "Barbaracle",
    "Barboach",
    "Barraskewda",
    "Basculegion female",
    "Basculegion male",
    "Basculin blue striped",
    "Basculin red striped",
    "Basculin white striped",
    "Bastiodon",
    "Bayleef",
    "Beartic",
    "Beautifly",
    "Beedrill mega",
    "Beheeyem",
    "Beldum",
    "Bellossom",
    "Bellsprout",
    "Bergmite",
    "Bewear",
    "Bibarel",
    "Bidoof",
    "Binacle",
    "Bisharp",
    "Blacephalon",
    "Blastoise gmax",
    "Blastoise mega",
    "Blaziken",
    "Blaziken mega",
    "Blipbug",
    "Blissey",
    "Blitzle",
    "Boldore",
    "Boltund",
    "Bonsly",
    "Bouffalant",
    "Bounsweet",
    "Braixen",
    "Braviary",
    "Braviary hisui",
    "Breloom",
    "Brionne",
    "Bronzong",
    "Bronzor",
    "Bruxish",
    "Budew",
    "Buizel",
    "Buneary",
    "Bunnelby",
    "Burmy",
    "Butterfree gmax",
    "Buzzwole",
    "Cacnea",
    "Cacturne",
    "Calyrex",
    "Calyrex ice",
    "Calyrex shadow",
    "Camerupt",
    "Camerupt mega",
    "Carbink",
    "Carkol",
    "Carnivine",
    "Carracosta",
    "Carvanha",
    "Cascoon",
    "Castform",
    "Castform rainy",
    "Castform snowy",
    "Castform sunny",
    "Celebi",
    "Celesteela",
    "Centiskorch",
    "Centiskorch gmax",
    "Chandelure",
    "Chansey",
    "Charizard",
    "Charizard gmax",
    "Charizard mega x",
    "Charizard mega y",
    "Charjabug",
    "Charmander",
    "Chatot",
    "Cherrim",
    "Cherubi",
    "Chesnaught",
    "Chespin",
    "Chewtle",
    "Chikorita",
    "Chimchar",
    "Chimecho",
    "Chinchou",
    "Chingling",
    "Cinccino",
    "Cinderace",
    "Cinderace gmax",
    "Clamperl",
    "Clauncher",
    "Clawitzer",
    "Claydol",
    "Clefable",
    "Clefairy",
    "Cleffa",
    "Clobbopus",
    "Cloyster",
    "Coalossal",
    "Coalossal gmax",
    "Cobalion",
    "Cofagrigus",
    "Combee",
    "Combusken",
    "Comfey",
    "Conkeldurr",
    "Copperajah",
    "Copperajah gmax",
    "Corphish",
    "Corsola",
    "Corsola galar",
    "Corviknight",
    "Corviknight gmax",
    "Corvisquire",
    "Cosmoem",
    "Cosmog",
    "Cottonee",
    "Crabominable",
    "Crabrawler",
    "Cradily",
    "Cramorant",
    "Cramorant gorging",
    "Cramorant gulping",
    "Cranidos",
    "Crawdaunt",
    "Cresselia",
    "Croagunk",
    "Crobat",
    "Croconaw",
    "Crustle",
    "Cryogonal",
    "Cubchoo",
    "Cubone",
    "Cufant",
    "Cursola",
    "Cutiefly",
    "Cyndaquil",
    "Darkrai",
    "Darmanitan galar standard",
    "Darmanitan galar zen",
    "Darmanitan standard",
    "Darmanitan zen",
    "Dartrix",
    "Darumaka",
    "Darumaka galar",
    "Decidueye",
    "Decidueye hisui",
    "Dedenne",
    "Deerling",
    "Deino",
    "Delcatty",
    "Delibird",
    "Delphox",
    "Deoxys attack",
    "Deoxys defense",
    "Deoxys normal",
    "Deoxys speed",
    "Dewgong",
    "Dewott",
    "Dewpider",
    "Dhelmise",
    "Dialga",
    "Dialga origin",
    "Diancie",
    "Diancie mega",
    "Diggersby",
    "Diglett",
    "Diglett alola",
    "Ditto",
    "Dodrio",
    "Doduo",
    "Donphan",
    "Dottler",
    "Doublade",
    "Dracovish",
    "Dracozolt",
    "Dragalge",
    "Dragapult",
    "Dragonair",
    "Dragonite",
    "Drakloak",
    "Drampa",
    "Drapion",
    "Dratini",
    "Drednaw",
    "Drednaw gmax",
    "Dreepy",
    "Drifblim",
    "Drifloon",
    "Drilbur",
    "Drizzile",
    "Drowzee",
    "Druddigon",
    "Dubwool",
    "Ducklett",
    "Dugtrio",
    "Dugtrio alola",
    "Dunsparce",
    "Duosion",
    "Duraludon",
    "Duraludon gmax",
    "Durant",
    "Dusclops",
    "Dusknoir",
    "Duskull",
    "Dustox",
    "Dwebble",
    "Eelektrik",
    "Eelektross",
    "Eevee",
    "Eevee gmax",
    "Eevee starter",
    "Eiscue ice",
    "Eiscue noice",
    "Ekans",
    "Eldegoss",
    "Electabuzz",
    "Electivire",
    "Electrike",
    "Electrode",
    "Electrode hisui",
    "Elekid",
    "Elgyem",
    "Emboar",
    "Emolga",
    "Empoleon",
    "Enamorus incarnate",
    "Enamorus therian",
    "Entei",
    "Escavalier",
    "Espeon",
    "Espurr",
    "Eternatus",
    "Eternatus eternamax",
    "Excadrill",
    "Exeggcute",
    "Exeggutor",
    "Exeggutor alola",
    "Exploud",
    "Falinks",
    "Farfetchd",
    "Farfetchd galar",
    "Fearow",
    "Feebas",
    "Fennekin",
    "Feraligatr",
    "Ferroseed",
    "Ferrothorn",
    "Finneon",
    "Flaaffy",
    "Flabebe",
    "Flapple",
    "Flapple gmax",
    "Flareon",
    "Fletchinder",
    "Fletchling",
    "Floatzel",
    "Floette",
    "Floette eternal",
    "Florges",
    "Flygon",
    "Fomantis",
    "Foongus",
    "Forretress",
    "Fraxure",
    "Frillish",
    "Froakie",
    "Frogadier",
    "Froslass",
    "Frosmoth",
    "Furfrou",
    "Furret",
    "Gabite",
    "Gallade",
    "Gallade mega",
    "Galvantula",
    "Garbodor",
    "Garbodor gmax",
    "Garchomp",
    "Garchomp mega",
    "Gardevoir",
    "Gardevoir mega",
    "Gastly",
    "Gastrodon",
    "Genesect",
    "Gengar",
    "Gengar gmax",
    "Gengar mega",
    "Geodude",
    "Geodude alola",
    "Gible",
    "Gigalith",
    "Girafarig",
    "Giratina altered",
    "Giratina origin",
    "Glaceon",
    "Glalie",
    "Glalie mega",
    "Glameow",
    "Glastrier",
    "Gligar",
    "Gliscor",
    "Gloom",
    "Gogoat",
    "Golbat",
    "Goldeen",
    "Golduck",
    "Golem",
    "Golem alola",
    "Golett",
    "Golisopod",
    "Golurk",
    "Goodra",
    "Goodra hisui",
    "Goomy",
    "Gorebyss",
    "Gossifleur",
    "Gothita",
    "Gothitelle",
    "Gothorita",
    "Gourgeist average",
    "Gourgeist large",
    "Gourgeist small",
    "Gourgeist super",
    "Granbull",
    "Grapploct",
    "Graveler",
    "Graveler alola",
    "Greedent",
    "Greninja",
    "Greninja ash",
    "Greninja battle bond",
    "Grimer",
    "Grimer alola",
    "Grimmsnarl",
    "Grimmsnarl gmax",
    "Grookey",
    "Grotle",
    "Groudon",
    "Groudon primal",
    "Grovyle",
    "Growlithe",
    "Growlithe hisui",
    "Grubbin",
    "Grumpig",
    "Gulpin",
    "Gumshoos",
    "Gumshoos totem",
    "Gurdurr",
    "Guzzlord",
    "Gyarados",
    "Gyarados mega",
    "Hakamo o",
    "Happiny",
    "Hariyama",
    "Hatenna",
    "Hatterene",
    "Hatterene gmax",
    "Hattrem",
    "Haunter",
    "Hawlucha",
    "Haxorus",
    "Heatmor",
    "Heatran",
    "Heliolisk",
    "Helioptile",
    "Heracross",
    "Heracross mega",
    "Herdier",
    "Hippopotas",
    "Hippowdon",
    "Hitmonchan",
    "Hitmonlee",
    "Hitmontop",
    "Ho oh",
    "Honchkrow",
    "Honedge",
    "Hoopa",
    "Hoopa unbound",
    "Hoothoot",
    "Hoppip",
    "Horsea",
    "Houndoom",
    "Houndoom mega",
    "Houndour",
    "Huntail",
    "Hydreigon",
    "Hypno",
    "Igglybuff",
    "Illumise",
    "Impidimp",
    "Incineroar",
    "Indeedee female",
    "Indeedee male",
    "Infernape",
    "Inkay",
    "Inteleon",
    "Inteleon gmax",
    "Jangmo o",
    "Jellicent",
    "Jigglypuff",
    "Jirachi",
    "Jolteon",
    "Joltik",
    "Jumpluff",
    "Jynx",
    "Kabuto",
    "Kabutops",
    "Kadabra",
    "Kangaskhan",
    "Kangaskhan mega",
    "Karrablast",
    "Kartana",
    "Kecleon",
    "Keldeo ordinary",
    "Keldeo resolute",
    "Kingdra",
    "Kingler",
    "Kingler gmax",
    "Kirlia",
    "Klang",
    "Kleavor",
    "Klefki",
    "Klink",
    "Klinklang",
    "Koffing",
    "Komala",
    "Kommo o",
    "Kommo o totem",
    "Krabby",
    "Kricketot",
    "Kricketune",
    "Krokorok",
    "Krookodile",
    "Kubfu",
    "Kyogre",
    "Kyogre primal",
    "Kyurem",
    "Kyurem black",
    "Kyurem white",
    "Lairon",
    "Lampent",
    "Landorus incarnate",
    "Landorus therian",
    "Lanturn",
    "Lapras",
    "Lapras gmax",
    "Larvesta",
    "Larvitar",
    "Latias",
    "Latias mega",
    "Latios",
    "Latios mega",
    "Leafeon",
    "Leavanny",
    "Ledian",
    "Ledyba",
    "Lickilicky",
    "Lickitung",
    "Liepard",
    "Lileep",
    "Lilligant",
    "Lilligant hisui",
    "Lillipup",
    "Linoone",
    "Linoone galar",
    "Litleo",
    "Litten",
    "Litwick",
    "Lombre",
    "Lopunny",
    "Lopunny mega",
    "Lotad",
    "Loudred",
    "Lucario",
    "Lucario mega",
    "Ludicolo",
    "Lugia",
    "Lumineon",
    "Lunala",
    "Lunatone",
    "Lurantis",
    "Lurantis totem",
    "Luvdisc",
    "Luxio",
    "Luxray",
    "Lycanroc dusk",
    "Lycanroc midday",
    "Lycanroc midnight",
    "Machamp",
    "Machamp gmax",
    "Machoke",
    "Machop",
    "Magby",
    "Magcargo",
    "Magearna",
    "Magearna original",
    "Magikarp",
    "Magmar",
    "Magmortar",
    "Magnemite",
    "Magneton",
    "Magnezone",
    "Makuhita",
    "Malamar",
    "Mamoswine",
    "Manaphy",
    "Mandibuzz",
    "Manectric",
    "Manectric mega",
    "Mankey",
    "Mantine",
    "Mantyke",
    "Maractus",
    "Mareanie",
    "Mareep",
    "Marill",
    "Marowak",
    "Marowak alola",
    "Marowak totem",
    "Marshadow",
    "Marshtomp",
    "Masquerain",
    "Mawile",
    "Mawile mega",
    "Medicham",
    "Medicham mega",
    "Meditite",
    "Meganium",
    "Melmetal",
    "Melmetal gmax",
    "Meloetta aria",
    "Meloetta pirouette",
    "Meltan",
    "Meowstic female",
    "Meowstic male",
    "Meowth",
    "Meowth alola",
    "Meowth galar",
    "Meowth gmax",
    "Mesprit",
    "Metagross",
    "Metagross mega",
    "Metang",
    "Mew",
    "Mewtwo",
    "Mewtwo mega x",
    "Mewtwo mega y",
    "Mienfoo",
    "Mienshao",
    "Mightyena",
    "Milcery",
    "Milotic",
    "Miltank",
    "Mime jr",
    "Mimikyu busted",
    "Mimikyu disguised",
    "Mimikyu totem busted",
    "Mimikyu totem disguised",
    "Minccino",
    "Minior blue",
    "Minior blue meteor",
    "Minior green",
    "Minior green meteor",
    "Minior indigo",
    "Minior indigo meteor",
    "Minior orange",
    "Minior orange meteor",
    "Minior red",
    "Minior red meteor",
    "Minior violet",
    "Minior violet meteor",
    "Minior yellow",
    "Minior yellow meteor",
    "Minun",
    "Misdreavus",
    "Mismagius",
    "Moltres",
    "Moltres galar",
    "Monferno",
    "Morelull",
    "Morgrem",
    "Morpeko full belly",
    "Morpeko hangry",
    "Mothim",
    "Mr mime",
    "Mr mime galar",
    "Mr rime",
    "Mudbray",
    "Mudkip",
    "Mudsdale",
    "Muk",
    "Muk alola",
    "Munchlax",
    "Munna",
    "Murkrow",
    "Musharna",
    "Naganadel",
    "Natu",
    "Necrozma",
    "Necrozma dawn",
    "Necrozma dusk",
    "Necrozma ultra",
    "Nickit",
    "Nidoking",
    "Nidoqueen",
    "Nidoran f",
    "Nidoran m",
    "Nidorina",
    "Nidorino",
    "Nihilego",
    "Nincada",
    "Ninetales",
    "Ninetales alola",
    "Ninjask",
    "Noctowl",
    "Noibat",
    "Noivern",
    "Nosepass",
    "Numel",
    "Nuzleaf",
    "Obstagoon",
    "Octillery",
    "Oddish",
    "Omanyte",
    "Omastar",
    "Onix",
    "Oranguru",
    "Orbeetle",
    "Orbeetle gmax",
    "Oricorio baile",
    "Oricorio pau",
    "Oricorio pom pom",
    "Oricorio sensu",
    "Oshawott",
    "Overqwil",
    "Pachirisu",
    "Palkia",
    "Palkia origin",
    "Palossand",
    "Palpitoad",
    "Pancham",
    "Pangoro",
    "Panpour",
    "Pansage",
    "Pansear",
    "Paras",
    "Parasect",
    "Passimian",
    "Patrat",
    "Pawniard",
    "Pelipper",
    "Perrserker",
    "Persian",
    "Persian alola",
    "Petilil",
    "Phanpy",
    "Phantump",
    "Pheromosa",
    "Phione",
    "Pichu",
    "Pidgeot mega",
    "Pidove",
    "Pignite",
    "Pikachu",
    "Pikachu alola cap",
    "Pikachu belle",
    "Pikachu cosplay",
    "Pikachu gmax",
    "Pikachu hoenn cap",
    "Pikachu kalos cap",
    "Pikachu libre",
    "Pikachu original cap",
    "Pikachu partner cap",
    "Pikachu phd",
    "Pikachu pop star",
    "Pikachu rock star",
    "Pikachu sinnoh cap",
    "Pikachu starter",
    "Pikachu unova cap",
    "Pikachu world cap",
    "Pikipek",
    "Piloswine",
    "Pincurchin",
    "Pineco",
    "Pinsir",
    "Pinsir mega",
    "Piplup",
    "Plusle",
    "Poipole",
    "Politoed",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Polteageist",
    "Ponyta",
    "Ponyta galar",
    "Poochyena",
    "Popplio",
    "Porygon",
    "Porygon z",
    "Porygon2",
    "Primarina",
    "Primeape",
    "Prinplup",
    "Probopass",
    "Psyduck",
    "Pumpkaboo average",
    "Pumpkaboo large",
    "Pumpkaboo small",
    "Pumpkaboo super",
    "Pupitar",
    "Purrloin",
    "Purugly",
    "Pyroar",
    "Pyukumuku",
    "Quagsire",
    "Quilava",
    "Quilladin",
    "Qwilfish",
    "Qwilfish hisui",
    "Raboot",
    "Raichu",
    "Raichu alola",
    "Raikou",
    "Ralts",
    "Rampardos",
    "Rapidash",
    "Rapidash galar",
    "Raticate alola",
    "Raticate totem alola",
    "Rattata alola",
    "Rayquaza",
    "Rayquaza mega",
    "Regice",
    "Regidrago",
    "Regieleki",
    "Regigigas",
    "Regirock",
    "Registeel",
    "Relicanth",
    "Remoraid",
    "Reshiram",
    "Reuniclus",
    "Rhydon",
    "Rhyhorn",
    "Rhyperior",
    "Ribombee",
    "Ribombee totem",
    "Rillaboom",
    "Rillaboom gmax",
    "Riolu",
    "Rockruff",
    "Rockruff own tempo",
    "Roggenrola",
    "Rolycoly",
    "Rookidee",
    "Roselia",
    "Roserade",
    "Rotom",
    "Rotom fan",
    "Rotom frost",
    "Rotom heat",
    "Rotom mow",
    "Rotom wash",
    "Rowlet",
    "Rufflet",
    "Runerigus",
    "Sableye",
    "Sableye mega",
    "Salamence",
    "Salamence mega",
    "Salandit",
    "Salazzle",
    "Salazzle totem",
    "Samurott",
    "Samurott hisui",
    "Sandaconda",
    "Sandaconda gmax",
    "Sandile",
    "Sandshrew",
    "Sandshrew alola",
    "Sandslash",
    "Sandslash alola",
    "Sandygast",
    "Sawk",
    "Sawsbuck",
    "Scatterbug",
    "Sceptile",
    "Sceptile mega",
    "Scizor",
    "Scizor mega",
    "Scolipede",
    "Scorbunny",
    "Scrafty",
    "Scraggy",
    "Scyther",
    "Seadra",
    "Seaking",
    "Sealeo",
    "Seedot",
    "Seel",
    "Seismitoad",
    "Sentret",
    "Serperior",
    "Servine",
    "Seviper",
    "Sewaddle",
    "Sharpedo",
    "Sharpedo mega",
    "Shaymin land",
    "Shaymin sky",
    "Shedinja",
    "Shelgon",
    "Shellder",
    "Shellos",
    "Shelmet",
    "Shieldon",
    "Shiftry",
    "Shiinotic",
    "Shinx",
    "Shroomish",
    "Shuckle",
    "Shuppet",
    "Sigilyph",
    "Silcoon",
    "Silicobra",
    "Silvally",
    "Simipour",
    "Simisage",
    "Simisear",
    "Sinistea",
    "Sirfetchd",
    "Sizzlipede",
    "Skarmory",
    "Skiddo",
    "Skiploom",
    "Skitty",
    "Skorupi",
    "Skrelp",
    "Skuntank",
    "Skwovet",
    "Slaking",
    "Slakoth",
    "Sliggoo",
    "Sliggoo hisui",
    "Slowbro",
    "Slowbro galar",
    "Slowbro mega",
    "Slowking",
    "Slowking galar",
    "Slowpoke",
    "Slowpoke galar",
    "Slugma",
    "Slurpuff",
    "Smeargle",
    "Smoochum",
    "Sneasel",
    "Sneasel hisui",
    "Sneasler",
    "Snivy",
    "Snom",
    "Snorlax",
    "Snorlax gmax",
    "Snorunt",
    "Snover",
    "Snubbull",
    "Sobble",
    "Solgaleo",
    "Solosis",
    "Solrock",
    "Spearow",
    "Spectrier",
    "Spewpa",
    "Spheal",
    "Spinarak",
    "Spinda",
    "Spiritomb",
    "Spoink",
    "Spritzee",
    "Stakataka",
    "Stantler",
    "Staraptor",
    "Staravia",
    "Starly",
    "Starmie",
    "Staryu",
    "Steelix",
    "Steelix mega",
    "Steenee",
    "Stonjourner",
    "Stoutland",
    "Stufful",
    "Stunfisk",
    "Stunfisk galar",
    "Stunky",
    "Sudowoodo",
    "Suicune",
    "Sunflora",
    "Sunkern",
    "Surskit",
    "Swablu",
    "Swadloon",
    "Swalot",
    "Swampert",
    "Swampert mega",
    "Swanna",
    "Swellow",
    "Swinub",
    "Swirlix",
    "Swoobat",
    "Sylveon",
    "Taillow",
    "Talonflame",
    "Tangela",
    "Tangrowth",
    "Tapu bulu",
    "Tapu fini",
    "Tapu koko",
    "Tapu lele",
    "Tauros",
    "Teddiursa",
    "Tentacool",
    "Tentacruel",
    "Tepig",
    "Terrakion",
    "Thievul",
    "Throh",
    "Thundurus incarnate",
    "Thundurus therian",
    "Thwackey",
    "Timburr",
    "Tirtouga",
    "Togedemaru",
    "Togedemaru totem",
    "Togekiss",
    "Togepi",
    "Togetic",
    "Torchic",
    "Torkoal",
    "Tornadus incarnate",
    "Tornadus therian",
    "Torracat",
    "Torterra",
    "Totodile",
    "Toucannon",
    "Toxapex",
    "Toxel",
    "Toxicroak",
    "Toxtricity amped",
    "Toxtricity amped gmax",
    "Toxtricity low key",
    "Toxtricity low key gmax",
    "Tranquill",
    "Trapinch",
    "Treecko",
    "Trevenant",
    "Tropius",
    "Trubbish",
    "Trumbeak",
    "Tsareena",
    "Turtonator",
    "Turtwig",
    "Tympole",
    "Tynamo",
    "Type null",
    "Typhlosion",
    "Typhlosion hisui",
    "Tyranitar",
    "Tyranitar mega",
    "Tyrantrum",
    "Tyrogue",
    "Tyrunt",
    "Umbreon",
    "Unfezant",
    "Unown",
    "Ursaluna",
    "Ursaring",
    "Urshifu rapid strike",
    "Urshifu rapid strike gmax",
    "Urshifu single strike",
    "Urshifu single strike gmax",
    "Uxie",
    "Vanillish",
    "Vanillite",
    "Vanilluxe",
    "Vaporeon",
    "Venipede",
    "Venomoth",
    "Venonat",
    "Venusaur gmax",
    "Venusaur mega",
    "Vespiquen",
    "Vibrava",
    "Victini",
    "Victreebel",
    "Vigoroth",
    "Vikavolt",
    "Vikavolt totem",
    "Vileplume",
    "Virizion",
    "Vivillon",
    "Volbeat",
    "Volcanion",
    "Volcarona",
    "Voltorb",
    "Voltorb hisui",
    "Vullaby",
    "Vulpix",
    "Vulpix alola",
    "Wailmer",
    "Wailord",
    "Walrein",
    "Watchog",
    "Weavile",
    "Weepinbell",
    "Weezing",
    "Weezing galar",
    "Whimsicott",
    "Whirlipede",
    "Whiscash",
    "Whismur",
    "Wigglytuff",
    "Wimpod",
    "Wingull",
    "Wishiwashi school",
    "Wishiwashi solo",
    "Wobbuffet",
    "Woobat",
    "Wooloo",
    "Wooper",
    "Wormadam plant",
    "Wormadam sandy",
    "Wormadam trash",
    "Wurmple",
    "Wynaut",
    "Wyrdeer",
    "Xatu",
    "Xerneas",
    "Xurkitree",
    "Yamask",
    "Yamask galar",
    "Yamper",
    "Yanma",
    "Yanmega",
    "Yungoos",
    "Yveltal",
    "Zacian",
    "Zacian crowned",
    "Zamazenta",
    "Zamazenta crowned",
    "Zangoose",
    "Zapdos",
    "Zapdos galar",
    "Zarude",
    "Zarude dada",
    "Zebstrika",
    "Zekrom",
    "Zeraora",
    "Zigzagoon",
    "Zigzagoon galar",
    "Zoroark",
    "Zoroark hisui",
    "Zorua",
    "Zorua hisui",
    "Zubat",
    "Zweilous",
    "Zygarde 10",
    "Zygarde 10 power construct",
    "Zygarde 50",
    "Zygarde 50 power construct",
    "Zygarde complete"
]

const CARDCOLORS = [
  {
    type: 'normal',
    color: '#A8A878'
  },
  {
    type: 'flying',
    color: '#A890F0'
  },
  {
    type: 'fire',
    color: '#DD6C6C'
  },
  {
    type: 'water',
    color: '#688FF0'
  },
  {
    type: 'grass',
    color: '#78C850'
  },
  {
    type: 'electric',
    color: '#F8D02F'
  },
  {
    type: 'ice',
    color: '#98D8D8'
  },
  {
    type: 'fighting',
    color: '#C03028'
  },
  {
    type: 'poison',
    color: '#A040A1'
  },
  {
    type: 'ground',
    color: '#E0C068'
  },
  {
    type: 'psychic',
    color: '#F85888'
  },
  {
    type: 'bug',
    color: '#A8B820'
  },
  {
    type: 'rock',
    color: '#B9A038'
  },
  {
    type: 'ghost',
    color: '#705899'
  },
  {
    type: 'dark',
    color: '#705848'
  },
  {
    type: 'dragon',
    color: '#7038F8'
  },
  {
    type: 'steel',
    color: '#B8B8D0'
  },
  {
    type: 'fairy',
    color: '#F0B6BC'
  }
]

const SPRITES = []

let input = document.getElementById('GET-pokemon')

input.addEventListener("keyup", (e) => {
  removeElements()
  for (let i of ALLPOKEMON) {
    if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !== "") {
      let listItem = document.createElement('li')
      listItem.classList.add('list-items')
      listItem.style.cursor = 'pointer'
      listItem.setAttribute('onclick', "displayNames('" + i + "')")
      let word = '<b>' + i.substring(0, input.value.length) + '</b>'
      word += i.substring(input.value.length)
      listItem.innerHTML = word
      document.querySelector(".list").appendChild(listItem)
    }
  }
})

function displayNames(value) {
  input.value = value
  removeElements()
}

function removeElements() {
  let items = document.querySelectorAll('.list-items')
  items.forEach(item => {
    item.remove()
  })
}

async function handleNewClick(e) {
  e.preventDefault()
  removeElements()
  let searching = e.target[0].value.trim().toLowerCase().split(' ').join('-')
  let isPokemon = document.getElementById(searching)
  let domChildren = document.getElementById('cards-container').childElementCount
  if(isPokemon !== null){
    let pokeId = isPokemon.parentElement.parentElement.parentElement.id
    let crnt = document.querySelector('.currentCard')

    if (pokeId === crnt.id) return

    let prev = document.querySelector('.previousCard')
    let next = document.querySelector('.nextCard')
    prev.classList.remove('cardN', 'previousCard')
    crnt.classList.remove('cardN', 'currentCard')
    next.classList.remove('cardN', 'nextCard')
    prev.classList.add('hiddenCard')
    crnt.classList.add('hiddenCard')
    next.classList.add('hiddenCard')
    let newCurrent = document.getElementById(pokeId)
    let newPrevious = document.getElementById((parseInt(pokeId) - 1))
    let newNext = document.getElementById((parseInt(pokeId) + 1))
    newCurrent.classList.remove('hiddenCard')
    newPrevious.classList.remove('hiddenCard')
    newNext.classList.remove('hiddenCard')
    newCurrent.classList.add('cardN', 'currentCard')
    newPrevious.classList.add('cardN', 'previousCard')
    newNext.classList.add('cardN', 'nextCard')

    let mobileInfoP = document.getElementById('previous-button')
    let pInfoPrev = SPRITES.find(p => {
      return p.id == (parseInt(pokeId) - 1)
    })

    mobileInfoP.style.borderColor = pInfoPrev.color
    let mobilePP = document.getElementById('previous-button').children[2]
    mobilePP.innerText = pInfoPrev.name.charAt(0).toUpperCase() + pInfoPrev.name.slice(1).split('-').join(' ')
    mobilePP.id = `previous-pokemon-${(parseInt(pokeId) - 1)}`
    let pImgP = document.getElementById('default-sprite-p')
    pImgP.setAttribute('src', pInfoPrev.url)
    pImgP.setAttribute('alt', pInfoPrev.name)

    let mobileInfoN = document.getElementById('next-button')
    let pInfoNext = SPRITES.find(p => {
      return p.id == (parseInt(pokeId) + 1)
    }) 

    mobileInfoN.style.borderColor = pInfoNext.color
    let mobilePN = document.getElementById('next-button').children[2]
    mobilePN.innerText = pInfoNext.name.charAt(0).toUpperCase() + pInfoNext.name.slice(1).split('-').join(' ')
    mobilePP.id = `next-pokemon-${(parseInt(pokeId) + 1)}`
    let pImgPN = document.getElementById('default-sprite-p')
    pImgPN.setAttribute('src', pInfoNext.url)
    pImgPN.setAttribute('alt', pInfoNext.name)
    return
  }

  if(domChildren !== 0) {
    let crnt = document.querySelector('.currentCard')
    let prev = document.querySelector('.previousCard')
    let next = document.querySelector('.nextCard')
    prev.classList.remove('cardN', 'previousCard')
    crnt.classList.remove('cardN', 'currentCard')
    next.classList.remove('cardN', 'nextCard')
    prev.classList.add('hiddenCard')
    crnt.classList.add('hiddenCard')
    next.classList.add('hiddenCard')
    sortDOMElements()
  }

  if (searching.length !== 0) {
    let pokemons = await getPokemon(searching)
    if (pokemons !== 'not found') {
      let mobileArrows = document.getElementById('mobile-arrows')
      mobileArrows.classList.remove('mobile-arrows-hide')
      mobileArrows.classList.add('mobile-arrows-show')
      let container = document.getElementById('cards-container')
      for (let i = 0; i < pokemons.length; i++) {
        let [newCard, color] = createCard(pokemons[i])
        if (i === 0) {
          newCard.classList.add('previousCard')
          let mobileInfo = document.getElementById('previous-button').children[2]
          mobileInfo.id = `previous-pokemon-${newCard.id}`

          document.getElementById('previous-button').style.borderColor = color
          let mobilePP = document.getElementById('previous-button').children[2]
          mobilePP.innerText = pokemons[0].name.charAt(0).toUpperCase() + pokemons[i].name.slice(1).split('-').join(' ')
          let pImgP = document.getElementById('default-sprite-p')
          pImgP.setAttribute('src', pokemons[i].sprites.front_default)
          pImgP.setAttribute('alt', pokemons[i].name)
        }
        if (i === 1) {
          newCard.classList.add('currentCard')
        }
        if (i === 2) {
          newCard.classList.add('nextCard')
          let mobileInfo = document.getElementById('next-button').children[2]
          mobileInfo.id = `next-pokemon-${newCard.id}`

          document.getElementById('next-button').style.borderColor = color
          let mobileNP = document.getElementById('next-button').children[2]
          mobileNP.innerText = pokemons[2].name.charAt(0).toUpperCase() + pokemons[2].name.slice(1).split('-').join(' ')
          let pImgN = document.getElementById('default-sprite-n')
          pImgN.setAttribute('src', pokemons[2].sprites.front_default)
          pImgN.setAttribute('alt', pokemons[2].name)
        }
        container.appendChild(newCard)
      }
    }
  }
}

function handleMoveCards(e) {
  let card = e.target
  let nameClass = card.classList[1]
  if (nameClass === 'previousCard') {
    card.classList.remove('previousCard')
    card.classList.add('currentCard')
    previousCardTransition(card, card.id)
  }
  if (nameClass === 'nextCard') {
    card.classList.remove('nextCard')
    card.classList.add('currentCard')
    nextCardTransition(card, card.id)
  }
}

function handleMobileButtons(e) {
  if (e.target.id === 'previous-button') {
    let pokemonId = e.target.children[2].id.split('-')[2]
    let card = document.getElementById(pokemonId)
    previousCardTransition(card, pokemonId)
  }
  if (e.target.id === 'next-button') {
    let pokemonId = e.target.children[2].id.split('-')[2]
    let card = document.getElementById(pokemonId)
    nextCardTransition(card, pokemonId)
  }
}

function sortDOMElements() {
  let htmlCollection = document.getElementById('cards-container')
  let arrayCollection = [...htmlCollection.children]
  arrayCollection.sort((a,b) => a - b)
  console.log(arrayCollection)
}

async function previousCardTransition(element, id) {
  let intId = parseInt(id)
  let arrowsContainer = document.getElementById('mobile-arrows')
  let btnMobileP = document.getElementById('previous-button')
  if(intId === 1) {
    btnMobileP.classList.remove('arrow-button')
    btnMobileP.classList.add('hide-btn')
    arrowsContainer.classList.remove('mobile-arrows-show')
    arrowsContainer.classList.add('mobile-arrows-show-first')
    let lastCurrent = document.getElementById((intId + 1))
    lastCurrent.classList.remove('currentCard')
    lastCurrent.classList.add('nextCard')
    let lastNext = document.getElementById((intId + 2))
    lastNext.classList.remove('cardN','nextCard')
    lastNext.classList.add('hiddenCard')
    element.classList.remove('previousCard')
    element.classList.add('currentCard')
    let btnMobileN = document.getElementById('next-button')
    let infoPN = SPRITES.find(p => {
      return p.id === (intId + 1)
    })
    
    btnMobileN.style.borderColor = infoPN.color
    btnMobileN.children[1].setAttribute('src', infoPN.url)
    btnMobileN.children[1].setAttribute('alt', infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1))
    btnMobileN.children[2].id = `previous-pokemon-${(intId + 1)}`
    btnMobileN.children[2].innerText = infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1)
    return
  }

  if(arrowsContainer.classList.contains('mobile-arrows-show-first')) {
    arrowsContainer.classList.remove('mobile-arrows-show-first')
    arrowsContainer.classList.add('mobile-arrows-show')
  }

  if(btnMobileP.classList.contains('hide-btn')) {
    btnMobileP.classList.remove('hide-btn')
    btnMobileP.classList.add('arrow-button')
  }

  let isPokemon = document.getElementById(intId - 1)
  if (isPokemon === null) {
    let newPokemon = await getOnePokemonById((intId - 1))
    let [newCard, color] = createCard(newPokemon)
    newCard.classList.add('previousCard')

    let cardsContainer = document.getElementById('cards-container')
    cardsContainer.insertBefore(newCard, element)
  } else {
    isPokemon.classList.remove('hiddenCard')
    isPokemon.classList.add('cardN', 'previousCard')
  }

  let infoPP = SPRITES.find(p => {
    return p.id === (intId - 1)
  })
  btnMobileP.style.borderColor = infoPP.color
  btnMobileP.children[1].setAttribute('src', infoPP.url)
  btnMobileP.children[1].setAttribute('alt', infoPP.name.charAt(0).toUpperCase() + infoPP.name.slice(1))
  btnMobileP.children[2].id = `previous-pokemon-${(intId - 1)}`
  btnMobileP.children[2].innerText = infoPP.name.charAt(0).toUpperCase() + infoPP.name.slice(1)

  let btnMobileN = document.getElementById('next-button')
  let infoPN = SPRITES.find(p => {
    return p.id === (intId + 1)
  })

  btnMobileN.style.borderColor = infoPN.color
  btnMobileN.children[1].setAttribute('src', infoPN.url)
  btnMobileN.children[1].setAttribute('alt', infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1))
  btnMobileN.children[2].id = `previous-pokemon-${(intId + 1)}`
  btnMobileN.children[2].innerText = infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1)

  element.classList.remove('previousCard')
  element.classList.add('currentCard')

  let lastCurrent = document.getElementById((intId + 1))
  lastCurrent.classList.remove('currentCard')
  lastCurrent.classList.add('nextCard')

  let lastNextCard = document.getElementById((intId + 2))
  lastNextCard.classList.remove('nextCard')
  lastNextCard.classList.remove('currentCard')
  lastNextCard.classList.remove('cardN')
  lastNextCard.classList.add('hiddenCard')
}

async function nextCardTransition(element, id) {
  let intId = parseInt(id)
  let isPokemon = document.getElementById(intId + 1)
  let btnMobileP = document.getElementById('previous-button')
  let arrowsContainer = document.getElementById('mobile-arrows')
  if (isPokemon === null) {
    let newPokemon = await getOnePokemonById((intId + 1))
    let [newCard, color] = createCard(newPokemon)
    newCard.classList.add('nextCard')

    let cardsContainer = document.getElementById('cards-container')
    cardsContainer.appendChild(newCard)
  } else {
    isPokemon.classList.remove('hiddenCard')
    isPokemon.classList.add('cardN', 'nextCard')
  }

  if(arrowsContainer.classList.contains('mobile-arrows-show-first')) {
    arrowsContainer.classList.remove('mobile-arrows-show-first')
    arrowsContainer.classList.add('mobile-arrows-show')
  }

  if(btnMobileP.classList.contains('hide-btn')) {
    btnMobileP.classList.remove('hide-btn')
    btnMobileP.classList.add('arrow-button')
  }

  let btnMobileN = document.getElementById('next-button')
  let infoPN = SPRITES.find(p => {
    return p.id === (intId + 1)
  })
  btnMobileN.style.borderColor = infoPN.color
  btnMobileN.children[1].setAttribute('src', infoPN.url)
  btnMobileN.children[1].setAttribute('alt', infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1))
  btnMobileN.children[2].id = `previous-pokemon-${(intId + 1)}`
  btnMobileN.children[2].innerText = infoPN.name.charAt(0).toUpperCase() + infoPN.name.slice(1)

  let infoPP = SPRITES.find(p => {
    return p.id === (intId - 1)
  })
  btnMobileP.style.borderColor = infoPP.color
  btnMobileP.children[1].setAttribute('src', infoPP.url)
  btnMobileP.children[1].setAttribute('alt', infoPP.name.charAt(0).toUpperCase() + infoPP.name.slice(1))
  btnMobileP.children[2].id = `previous-pokemon-${(intId - 1)}`
  btnMobileP.children[2].innerText = infoPP.name.charAt(0).toUpperCase() + infoPP.name.slice(1)

  element.classList.remove('nextCard')
  element.classList.add('currentCard')

  let lastCurrent = document.getElementById((intId - 1))
  lastCurrent.classList.remove('currentCard')
  lastCurrent.classList.add('previousCard')

  if(intId !== 2) {
    let lastPreviousCard = document.getElementById((intId - 2))
    lastPreviousCard.classList.remove('previousCard')
    lastPreviousCard.classList.remove('currentCard')
    lastPreviousCard.classList.remove('cardN')
    lastPreviousCard.classList.add('hiddenCard')
  }
}

async function getOnePokemonById(id) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let newPokemon = await res.json()
    return newPokemon
  }
  catch (error) {
    return 'not found'
  }
}

async function getPokemon(name) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let currentlyPokemon = await res.json()
    const { id } = currentlyPokemon
    let [previousPokemonRes, nextPokemonRes] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${(id - 1)}`),
      fetch(`https://pokeapi.co/api/v2/pokemon/${(id + 1)}`)
    ])
    let previousPokemon = await previousPokemonRes.json()
    let nextPokemon = await nextPokemonRes.json()
    return [previousPokemon, currentlyPokemon, nextPokemon]
  } catch (error) {
    return 'not found'
  }
}

function deleteZero(id) {
  switch (id.length) {
    case 1:
      return `#000${id}`
    case 2:
      return `#00${id}`
    case 3:
      return `#0${id}`
    case 4:
      return `#${id}`
    case 5:
      return `#${id.charAt(0) + id.slice(2)}`
  }
}

// Le pasamos el pokemon
function createCard(pokemon) {

  // Sacamos los tipos del pokemon
  let types = []
  for (let i = 0; i < pokemon.types.length; i++) {
    CARDCOLORS.forEach((pokType) => {
      if (pokType.type === pokemon.types[i].type.name) {
        let n = {
          type: pokemon.types[i].type.name,
          color: pokType.color
        }
        types.push(n)
      }
    })
  }

  // Recupera el container de las cartas
  // let container = document.getElementById('cards-container')
  // console.log('Im working!!')

  // Crea la carta
  let mainCard = document.createElement('div')
  mainCard.id = pokemon.id
  mainCard.className = 'cardN'
  let color = types[0].color
  mainCard.style.background = color

  // Crea el header de la carta
  let cardHeader = document.createElement('div')
  cardHeader.className = 'card-header'
  let pId = document.createElement('p')
  pId.id = `card-${pokemon.id}`
  pId.innerText = deleteZero(pokemon.id.toString())
  // let pImg = document.createElement('img').id = `card-img-${pokemon.id}`
  let pImg = new Image()
  let newSprite = {
    id: pokemon.id,
    url: pokemon.sprites.front_default,
    color: color,
    name: pokemon.name.split('-').join(' ')
  }
  SPRITES.push(newSprite)
  pImg.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
  pImg.setAttribute('alt', pokemon.name)
  let pHP = document.createElement('p')
  pHP.id = `card-hp-${pokemon.id}`
  pHP.classList.add('hp')
  pHP.innerText = "HP " + pokemon.stats[0].base_stat.toString()

  // Insertamos los elementos creados al header
  cardHeader.appendChild(pId)
  cardHeader.appendChild(pImg)
  cardHeader.appendChild(pHP)

  // Ingresamos el header a la carta
  mainCard.appendChild(cardHeader)

  // Creamos el contenedor de la información del pokemon
  let pokemonInfo = document.createElement('div')
  pokemonInfo.id = `pokemonInfo-${pokemon.id}`
  pokemonInfo.className = 'pokemon-info'
  let nameContainer = document.createElement('div')
  nameContainer.className = 'name'

  // Creamos e insertamos el div del nombre
  let pokemonName = document.createElement('p')
  pokemonName.id = pokemon.name
  pokemonName.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).split('-').join(' ')
  nameContainer.appendChild(pokemonName)
  pokemonInfo.appendChild(nameContainer)

  // Creamos e insertamos el div de stats
  let statsLabelContainer = document.createElement('div')
  statsLabelContainer.className = 'label-stats'
  let statsLabel = document.createElement('p')
  statsLabel.innerText = 'Stats'
  statsLabelContainer.appendChild(statsLabel)
  pokemonInfo.appendChild(statsLabelContainer)

  let statsLabelADSContainer = document.createElement('div')
  statsLabelADSContainer.className = 'label-stats-ADS'
  let statsLabelA = document.createElement('p')
  statsLabelA.innerText = 'Attack'
  let statsLabelD = document.createElement('p')
  statsLabelD.innerText = 'Defense'
  let statsLabelS = document.createElement('p')
  statsLabelS.innerText = 'Speed'
  statsLabelADSContainer.appendChild(statsLabelA)
  statsLabelADSContainer.appendChild(statsLabelD)
  statsLabelADSContainer.appendChild(statsLabelS)
  pokemonInfo.appendChild(statsLabelADSContainer)

  // Creamos e insertamos los stats del pokemon
  let stats = document.createElement('div')
  stats.className = 'stats'
  let statA = document.createElement('p')
  statA.innerText = pokemon.stats[1].base_stat.toString()
  let statD = document.createElement('p')
  statD.innerText = pokemon.stats[2].base_stat.toString()
  let statS = document.createElement('p')
  statS.innerText = pokemon.stats[5].base_stat.toString()
  stats.appendChild(statA)
  stats.appendChild(statD)
  stats.appendChild(statS)
  pokemonInfo.appendChild(stats)

  // Creamos la primera línea
  let fLine = document.createElement('div')
  fLine.className = 'line'
  pokemonInfo.appendChild(fLine)

  // Creamos el label de type
  let typeLabelContainer = document.createElement('div')
  typeLabelContainer.className = 'label-stats'
  let typeLabel = document.createElement('p')
  typeLabel.innerText = 'Type'
  typeLabelContainer.appendChild(typeLabel)
  pokemonInfo.appendChild(typeLabelContainer)

  //Creamos el div de types
  let tyContainer = document.createElement('div')
  tyContainer.className = 'flex-type'
  for (let i = 0; i < types.length; i++) {
    let newP = document.createElement('p')
    newP.className = 'type'
    newP.innerText = types[i].type.charAt(0).toUpperCase() + types[i].type.slice(1)
    newP.style.color = '#FFFFFF'
    newP.style.background = types[i].color
    tyContainer.appendChild(newP)
  }
  pokemonInfo.appendChild(tyContainer)

  // Creamos la segunda línea
  let sLine = document.createElement('div')
  sLine.className = 'line'
  pokemonInfo.appendChild(sLine)

  // Creamos weight y height
  let whContainer = document.createElement('div')
  whContainer.className = 'info'
  let whLabel = document.createElement('div')
  whLabel.className = 'info-label'
  let wP = document.createElement('p')
  wP.innerText = 'Weight'
  let hP = document.createElement('p')
  hP.innerText = 'Height'
  whLabel.appendChild(wP)
  whLabel.appendChild(hP)
  whContainer.appendChild(whLabel)
  let dataContainer = document.createElement('div')
  dataContainer.className = 'info-data'
  let weight = document.createElement('p')
  weight.innerText = `${(pokemon.weight / 10).toString()} kg`
  let height = document.createElement('p')
  height.innerText = `${(pokemon.height / 10).toString()} m`
  dataContainer.appendChild(weight)
  dataContainer.appendChild(height)
  whContainer.appendChild(dataContainer)
  pokemonInfo.appendChild(whContainer)

  mainCard.appendChild(pokemonInfo)
  mainCard.addEventListener('click', handleMoveCards)

  // Insertamos todo al contenedor de la tarjeta
  // container.appendChild(mainCard)

  return [mainCard, color]
}