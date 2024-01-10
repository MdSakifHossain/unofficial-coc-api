// troops.js
export const troops = [
	{
		id: 1,
		name: "Barbarian",
		hitpoints: 45,
		damagePerSecond: 8,
		tariningTime: "5s",
		damageType: "Single Target",
		targets: "Ground",
		housingSpace: 1,
		movementSpeed: 16,
		barrackLevelRequired: 1,
		description:
			"This Fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in eneny villages. Release a horde of Barbarians and enjoy the mayhem!",
		imageUrl: "https://i.ibb.co/P5qByXt/1704790428575.png"
	},
	{
	    id: 2,
		name: "Archer",
		hitpoints: 20,
		damagePerSecond: 7,
		trainingTime: "6s",
		damageType: "Single Target",
		targets: "Ground & Air",
		housingSpace: 1,
		movementSpeed: 24,
		barrackLevelRequired: 2,
		description:
			"These sharpshooters like to keep their distance on the battlefield and in life. Nothing makes them happier than single-mindedly taking down their target.",
		imageUrl: "https://i.ibb.co/SXFjbqy/1704790485978.png"
	},
	{
	    id: 3,
		name: "Giant",
		hitpoints: 300,
		damagePerSecond: 11,
		trainingTime: "30s",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Defense",
		housingSpace: 5,
		movementSpeed: 12,
		barrackLevelRequired: 3,
		description:
			"These big guys may seem calm, but show them a turret or cannon and you'll see their fury unleashed! Slow yet durable, these warriors are best used to soak up hits.",
		imageUrl: "https://i.ibb.co/Jy4H8ND/1704790613041.png"
	},
	{
	    id: 4,
		name: "Goblin",
		hitpoints: 25,
		damagePerSecond: 11,
		trainingTime: "7s",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Resources (Damage x2)",
		housingSpace: 1,
		movementSpeed: 32,
		barrackLevelRequired: 4,
		description:
			"These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.",
		imageUrl: "https://i.ibb.co/wMhpkK5/1704790656964.png"
	},
	{
	    id: 5,
		name: "Wall Breaker",
		hitpoints: 20,
		damageWhenDestroyed: 6,
		damage: 6,
		trainingTime: "15s",
		damageType: "Area Splash",
		targets: "Ground",
		favoriteTarget: "Walls (Damage x40)",
		housingSpace: 2,
		movementSpeed: 24,
		barrackLevelRequired: 5,
		description:
			"Nothing warms a Wall Breaker's cold and undead heart like blowing up walls. A squad of them will make way for your ground units, and they will do it with a BANG!",
		imageUrl: "https://i.ibb.co/QFWsknb/1704790693006.png"
	},
	{
	    id: 6,
		name: "Balloon",
		hitpoints: 150,
		damageWhenDestroyed: 25,
		damagePerSecond: 25,
		trainingTime: "30s",
		damageType: "Area Splash",
		targets: "Ground",
		favoriteTarget: "Defenses",
		housingSpace: 5,
		movementSpeed: 10,
		barrackLevelRequired: 6,
		description:
			"These promoted skeletons have traded in their joy of destroying walls for the joy of destroying defenses. Deploy them to take out pesky mortars and cannons!",
		imageUrl: "https://i.ibb.co/wd5msQr/1704790795975.png"
	},
	{
	    id: 7,
		name: "Wizard",
		hitpoints: 75,
		damagePerSecond: 50,
		trainingTime: "30s",
		damageType: "Area Splash",
		targets: "Ground & Air",
		housingSpace: 4,
		movementSpeed: 16,
		barrackLevelRequired: 7,
		description:
			"The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!",
		imageUrl: "https://i.ibb.co/1rFNzsj/1704790833965.png"
	},
	{
	    id: 8,
		name: "Healer",
		hitpoints: 500,
		heal: 36,
		trainingTime: "2m",
		heroHeal: 19,
		healType: "Area Splash",
		targets: "Ground",
		housingSpace: 14,
		movementSpeed: 16,
		barrackLevelRequired: 8,
		description:
			"This majestic creature lives to protect and aid her fellow troops. Any army is improved with her healing support, but make sure to protect her from air defenses!",
		imageUrl: "https://i.ibb.co/T2GhCv3/1704790854833.png"
	},
	{
	    id: 9,
		name: "Dragon",
		hitpoints: 1900,
		damagePerSecond: 140,
		trainingTime: "3m",
		damageType: "Area Splash",
		targets: "Ground & Air",
		housingSpace: 20,
		movementSpeed: 16,
		barrackLevelRequired: 9,
		description:
			"The might of the dragons is known throughout the land. This scaly terror of the skies feels no mercy, and nothing will escape the fiery splashes of his breath.",
		imageUrl: "https://i.ibb.co/k4TwBw5/1704790905962.png"
	},
	{
	    id: 10,
		name: "P.E.K.K.A",
		hitpoints: 3000,
		damagePerSecond: 260,
		trainingTime: "3m",
		damageType: "Single Target",
		targets: "Ground",
		housingSpace: 25,
		movementSpeed: 16,
		barrackLevelRequired: 10,
		description:
			"Is P.E.K.K.A a knight? A samurai? A robot? No one knows! P.E.K.K.A's armor absorbs even the mightiest of blows.",
		imageUrl: "https://i.ibb.co/WzF9xG6/1704790951929.png"
	},
	{
	    id: 11,
		name: "Baby Dragon",
		hitpoints: 1200,
		damagePerSecond: 75,
		trainingTime: "1m 30s",
		damageType: "Area Splash",
		targets: "Ground & Air",
		housingSpace: 10,
		enragedBonusDamage: "x2",
		movementSpeed: 20,
		barrackLevelRequired: 11,
		description:
			"This fire-breathing hatchling is shy around other air units, but leave it alone and it'll throw a fit! When not around other air units, Baby Dragons become enraged and gain bonus damage and attack speed.",
		imageUrl: "https://i.ibb.co/pJbDnGV/1704791033948.png"
	},
	{
	    id: 12,
		name: "Miner",
		hitpoints: 550,
		damagePerSecond: 80,
		trainingTime: "30s",
		damageType: "Single Target",
		targets: "Ground",
		housingSpace: 6,
		movementSpeed: 32,
		barrackLevelRequired: 12,
		description:
			"These sneaky shovelers burrow underground, pass beneath walls, and pop up right next to their targets. While underground, Miners cannot be damaged and will not trigger traps, but still gain bonuses from Spells.",
		imageUrl: "https://i.ibb.co/DkGxR8h/1704791109017.png"
	},
	{
	    id: 13,
		name: "Electro Dragon",
		hitpoints: 3200,
		damageWhenDestroyed: 390,
		damagePerSecond: 240,
		trainingTime: "6m",
		damageType: "Single Target",
		targets: "Ground & Air",
		housingSpace: 30,
		movementSpeed: 13,
		barrackLevelRequired: 13,
		description:
			"Possessing iron-tough scales and a breath of devastating lightning, the Electro Dragon's favorite thing is raining destruction from above. When vanquished, the Electro Dragon even pummels the ground with lightning strikes!",
		imageUrl: "https://i.ibb.co/nPYGCrg/1704791151067.png"
	},
	{
	    id: 14,
		name: "Yeti",
		hitpoints: 2900,
		damagePerSecond: 230,
		spawnedUnits: 8,
		trainingTime: "3m",
		damageType: "Single Target",
		targets: "Ground",
		housingSpace: 18,
		movementSpeed: 12,
		barrackLevelRequired: 14,
		description:
			"This heavy-hitting furry fellow digs cold weather and his Yetimite buddies. Hurt him, and you'll make the Yetimites real angry.",
		imageUrl: "https://i.ibb.co/k6H3S3T/1704791183395.png",
		more: {
			name: "Yetimite",
			hitpoints: 300,
			damage: 56,
			damageType: "Area Splash",
			targets: "Ground & Air",
			favoriteTarget: "Defenses (Damage x4)",
			movementSpeed: 24,
			description:
				"These little guys are super cuddly, but get very angsty when their big friend gets hurt. Hurt him enough, and they will swarm the nearest defense with a terrible purposefulness.",
			imageUrl: "https://i.ibb.co/dBGVjBj/1704791239068.png"
		}
	},
	{
	    id: 15,
		name: "Dragon Rider",
		hitpoints: 4100,
		damageWhenDestroyed: 700,
		damagePerSecond: 340,
		trainingTime: "4m 10s",
		damageType: "Single Target",
		targets: "Ground & Air",
		favoriteTarget: "Defenses",
		housingSpace: 25,
		movementSpeed: 20,
		barrackLevelRequired: 15,
		description:
			"This aerial engine of destruction readilyand Frankly. quite excitedly lays wasteto any defense it cormes across. Theskeleton onboard swears he's nottouching the controls.",
		imageUrl: "https://i.ibb.co/R4yHsKF/1704791427152.png"
	},
	{
	    id: 16,
		name: "Electro Titan",
		hitpoints: 7200,
		damagePerSecond: 180,
		auraDamagePerSecond: 75,
		trainingTime: "6m",
		damageType: "Single Target",
		targets: "Ground & Air",
		housingSpace: 32,
		movementSpeed: 16,
		barrackLevelRequired: 16,
		description:
			"Barely controlling her raw magical power, the Electro Titan is a formidable force on the battlefield. She channels some of her magic into a powerful electro whip while the rest spills out to damage everything around her.",
		imageUrl: "https://i.ibb.co/3R6yt1j/1704791558934.png"
	},
	{
	    id: 17,
		name: "Root Rider",
		hitpoints: 7200,
		damagePerSecond: 210,
		trainingTime: "3m 40s",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Defenses",
		housingSpace: 20,
		movementSpeed: 12,
		barrackLevelRequired: 17,
		description:
			"This earth warrior is so in tune with nature she doesn't need to walk herself. Riding into battle on top a tough tree root which can smash through walls and slam defenses into dust.",
		imageUrl: "https://i.ibb.co/pdCLNdz/1704791590540.png"
	},
	{
	    id: 18,
		name: "Minion",
		hitpoints: 58,
		damagePerSecond: 38,
		trainingTime: "36s",
		damageType: "Single Target",
		targets: "Ground & Air",
		housingSpace: 2,
		movementSpeed: 32,
		darkBarrackLevelRequired: 1,
		description:
			"This terror of the skies was born out of Dark Elixir. Undetectable by the Seeking Air Mine, Minions materialize with ease but are fragile in our world.",
		imageUrl: "https://i.ibb.co/rMFZMt8/1704791602480.png"
	},
	{
	    id: 19,
		name: "Hog Rider",
		hitpoints: 270,
		damagePerSecond: 60,
		trainingTime: "1m 30s",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Defenses",
		housingSpace: 5,
		movementSpeed: 24,
		darkBarrackLevelRequired: 2,
		description:
			"Having tamed the fierce leaping hog, theHog Rider punishes those who hidebehind their puny walls! Fueled by DarkElixir, these warriors have never knowndefeat!",
		imageUrl: "https://i.ibb.co/nbskByZ/1704791617419.png"
	},
	{
	    id: 20,
		name: "Valkyrie",
		hitpoints: 270,
		damagePerSecond: 94,
		trainingTime: "3m",
		damageType: "Area Splash",
		targets: "Ground",
		housingSpace: 8,
		movementSpeed: 24,
		darkBarrackLevelRequired: 3,
		description:
			"A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow!",
		imageUrl: "https://i.ibb.co/4PfBbRt/1704791673100.png"
	},
	{
	    id: 21,
		name: "Golem",
		hitpoints: 5100,
		damageWhenDestroyed: 350,
		damagePerSecond: 35,
		spawnedUnits: 2,
		trainingTime: "10m",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Defenses",
		housingSpace: 30,
		movementSpeed: 12,
		darkBarrackLevelRequired: 4,
		description:
			"The mighty Golem loves to soak up damage! When destroyed, it explodes and splits into Golemites. The resulting Golemites have one-fifth the Golem's strength and hitpoints.",
		imageUrl: "https://i.ibb.co/jWYsf6z/1704791692817.png",
		more: {
			name: "Golemite",
			hitpoints: 1020,
			damageWhenDestroyed: 70,
			damagePerSecond: 7,
			damageType: "Single Target",
			targets: "Ground",
			favoriteTarget: "Defenses",
			movementSpeed: 12,
			description:
				"Golemites are smaller Golems constructed within the gargantuan creature. When the Golem is destroyed, the Golemites spring to life and keep fighting!",
			imageUrl: "https://i.ibb.co/0XbVcNj/1704791710272.png"
		}
	},
	{
	    id: 22,
		name: "Witch",
		hitpoints: 300,
		damagePerSecond: 100,
		maximumSummonedUnits: 6,
		trainingTime: "4m",
		damageType: "Area Splash",
		targets: "Ground & Air",
		housingSpace: 12,
		movementSpeed: 12,
		darkBarrackLevelRequired: 5,
		description:
			"The Witch never fights alone, constantly raising dead warriors from past battles to lead her attacks. Upgraded Witches raise more skeletons at a time.",
		imageUrl: "https://i.ibb.co/MGnK5tj/1704791728134.png",
		extra: {
			name: "Skeleton",
			hitpoints: 30,
			damagePerSecond: 25,
			damageType: "Single Target",
			targets: "Ground",
			movementSpeed: 24,
			description:
				"This undead creature poses little threat by itself. But it never fights alone, since the Witch can summon an endless horde of Skeletons against your enemy!",
			imageUrl: "https://i.ibb.co/mHmcLKk/1704791747716.png"
		}
	},
	{
	    id: 23,
		name: "Lava Hound",
		hitpoints: 6100,
		damageWhenDestroyed: 100,
		damagePerSecond: 10,
		spawnedUnits: 8,
		trainingTime: "10m",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Air defense",
		housingSpace: 30,
		movementSpeed: 20,
		darkBarrackLevelRequired: 6,
		description:
			"These fiery beasts can't resist chasing after Air Defenses, providing excellent protection for other troops. Once destroyed, they erupt into many smaller, weaker menaces.",
		imageUrl: "https://i.ibb.co/pzPP970/1704791804489.png",
		more: {
			name: "Lava Pup",
			hitpoints: 50,
			damagePerSecond: 35,
			damageType: "Single Target",
			targets: "Ground & Air",
			movementSpeed: 32,
			description:
				"Thrust out in big numbers after a Lava Hound dies, these tiny creatures keep up the fight for a little while longer.",
			imageUrl: "https://i.ibb.co/W6FCqQc/1704791818555.png"
		}
	},
	{
	    id: 24,
		name: "Bowler",
		hitpoints: 325,
		damagePerSecond: 60,
		trainingTime: "2m",
		damageType: "Area Splash",
		targets: "Ground",
		housingSpace: 6,
		movementSpeed: 14,
		darkBarrackLevelRequired: 7,
		description:
			"This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders bounce off of their target and hit again behind it for a double strike!",
		imageUrl: "https://i.ibb.co/Qm2y1N5/1704791831214.png"
	},
	{
	    id: 25,
		name: "Ice Golem",
		hitpoints: 2600,
		damagePerSecond: 24,
		freezeOnDestroyed: "4s",
		trainingTime: "5m",
		damageType: "Single Target",
		targets: "Ground",
		favoriteTarget: "Defenses",
		housingSpace: 15,
		movementSpeed: 12,
		darkBarrackLevelRequired: 8,
		description:
			"The Ice Golem has a chilling personality and absolutely zero sense of humor. He frosts over everything he touches, freezes his surroundings when destroyed, and ices up when not invited to a party. On defense, his Freeze effect is smaller and has a shorter duration.",
		imageUrl: "https://i.ibb.co/bKS1hp9/1704791843380.png"
	},
	{
	    id: 26,
		name: "Headhunter",
		hitpoints: 360,
		speedDecreasePercent: 40,
		attackRateDecreasePercent: 55,
		damagePerSecond: 105,
		trainingTime: "2m",
		damageType: "Single Target",
		targets: "Ground & Air",
		favoriteTarget: "Heroes (Damage x4)",
		housingSpace: 6,
		movementSpeed: 24,
		darkBarrackLevelRequired: 9,
		description:
			"Headhunter has just one job: taking out enemy heroes. As her other job, she works at the village apothecary. She's lightweight enough to jump over walls, and her poisoned weapons make her targets move and attack slower.",
		imageUrl: "https://i.ibb.co/cCXYNPq/1704791861535.png"
	},
	{
	    id: 27,
		name: "Apprentice Warden",
		hitpoints: 1500,
		damagePerSecond: 170,
		trainingTime: "8m",
		auraHpIncreasePercent: 24,
		damageType: "Single Target",
		targets: "Ground & Air",
		housingSpace: 20,
		movementSpeed: 20,
		darkBarrackLevelRequired: 10,
		description:
			"Despite his grand ambitions, Apprentice Warden is still just a student. Supports troops with his magical Life Aura and less-magical slingshot.",
		imageUrl: "https://i.ibb.co/KVpXLny/1704792277018.png"
	}
];
