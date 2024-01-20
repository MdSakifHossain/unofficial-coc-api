// troops.js
export const troops = [
	{
		id: 1,
		name: "Barbarian",
		image: "https://i.ibb.co/ZM4Q61F/Barbarian-info.png",
		description:
			"This fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in enemy villages. Release a horde of Barbarians and enjoy the mayhem!"
	},
	{
		id: 2,
		name: "Archer",
		image: "https://i.ibb.co/Qj9Cdch/Archer-info.png",
		description:
			"These sharpshooters like to keep their distance on the battlefield and in life. Nothing makes them happier than single-mindedly taking down their target."
	},
	{
		id: 3,
		name: "Giant",
		image: "https://i.ibb.co/x3G27TT/Giant-info.png",
		description:
			"These big guys may seem calm, but show them a turret or cannon and you'll see their fury unleashed! Slow yet durable, these warriors are best used to soak up hits."
	},
	{
		id: 4,
		name: "Goblin",
		image: "https://i.ibb.co/tJQnzqh/Goblin-info.png",
		description:
			"These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless."
	},
	{
		id: 5,
		name: "Wall Breaker",
		image: "https://i.ibb.co/LZHChKj/Wall-Breaker-info.png",
		description:
			"Nothing warms a Wall Breaker's cold and undead heart like blowing up walls. A squad of them will make way for your ground units, and they will do it with a BANG!"
	},
	{
		id: 6,
		name: "Balloon",
		image: "https://i.ibb.co/LC0Pq2M/Balloon-info.png",
		description:
			"These promoted skeletons have traded in their joy of destroying walls for a joy of destroying defenses. Deploy them to take out pesky mortars and cannons!"
	},
	{
		id: 7,
		name: "Wizard",
		image: "https://i.ibb.co/crn08FL/Wizard-info.png",
		description:
			"The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!"
	},
	{
		id: 8,
		name: "Healer",
		image: "https://i.ibb.co/7SqyMFx/Healer-info.png",
		description:
			"This majestic creature lives to protect and aid her fellow troops. Any army is improved with her healing support, but make sure to protect her from air defenses!"
	},
	{
		id: 9,
		name: "Dragon",
		image: "https://i.ibb.co/dkSSfwS/Dragon-info.png",
		description:
			"The might of the dragons are known throughout the land. This scaly terror of the skies feels no mercy and nothing will escape the fiery splashes of his breath."
	},
	{
		id: 10,
		name: "P.E.K.K.A",
		image: "https://i.ibb.co/nnVZgCS/P-E-K-K-A-info.png",
		description:
			"Is P.E.K.K.A a knight? A samurai? A robot? No one knows! P.E.K.K.A's armor absorbs even the mightiest of blows."
	},
	{
		id: 11,
		name: "Baby Dragon",
		image: "https://i.ibb.co/0KxZyQm/Baby-Dragon-info.png",
		description:
			"This fire-breathing hatchling is shy around other air units, but leave it alone and it will throw a fit! When not around other air units, Baby Dragons become enraged and gain bonus damage and attack speed."
	},
	{
		id: 12,
		name: "Miner",
		image: "https://i.ibb.co/Mgprj73/Miner-info.png",
		description:
			"These sneaky shovelers burrow underground, pass beneath walls, and pop up right next to their targets. While underground, Miners cannot be damaged and will not trigger traps, but still gain bonuses from Spells."
	},
	{
		id: 13,
		name: "Electro Dragon",
		image: "https://i.ibb.co/QvtfNYj/Electro-Dragon-info.png",
		description:
			"Possessing iron-tough scales and a breath of devastating lightning, the Electro Dragon's favorite thing is raining destruction from above. When vanquished, the Electro Dragon even pummels the ground with lightning strikes!"
	},
	{
		id: 14,
		name: "Yeti",
		image: "https://i.ibb.co/SyxtLwN/Yeti-info.png",
		description:
			"The heavy-hitting furry fellow digs cold weather and his Yetimite buddies. Hurt him, and you'll make the Yetimites real angry.",
		more: [
			{
				name: "Yetimite",
				image: "https://i.ibb.co/23fJTgK/Yetimite-info.png",
				description:
					"These little guys are super cuddly, but get very angsty when their big friend gets hurt. Hurt him enough, and they will swarm the nearest defense with a terrible purposefulness."
			}
		]
	},
	{
		id: 15,
		name: "Dragon Rider",
		image: "https://i.ibb.co/crmL1kP/Dragon-Rider-info.png",
		description:
			"This aerial engine of destruction readily and frankly, quite excitedly lays waste to any defense it comes across. The skeleton onboard swears he's not touching the controls."
	},
	{
		id: 16,
		name: "Electro Titan",
		image: "https://i.ibb.co/Ln4jYB9/Electro-Titan-info.png",
		description:
			"Barely controlling her raw magical power, the Electro Titan is a formidable force on the battlefield. She channels some of her magic into a powerful electro whip while the rest spills out to damage everything around her."
	},
	{
		id: 17,
		name: "Root Rider",
		image: "https://i.ibb.co/CWF81Tx/Root-Rider-info.png",
		description:
			"This earth warrior is so in tune with nature she doesn't need to walk herself. Riding into battle on top a tough tree root which can smash through walls and slam defenses into dust."
	},
	{
		id: 18,
		name: "Minion",
		image: "https://i.ibb.co/kXq1Ddb/Minion-info.png",
		description:
			"This terror of the skies was born out of Dark Elixir. Undetectable by the Seeking Air Mine, Minions materialize with ease, but are fragile in our world."
	},
	{
		id: 19,
		name: "Hog Rider",
		image: "https://i.ibb.co/WPK33fv/Hog-Rider-info.png",
		description:
			"Having tamed the fierce leaping hog, the Hog Rider punishes those who hide behind their puny walls! Fueled by Dark Elixir, these warriors have never known defeat!"
	},
	{
		id: 20,
		name: "Valkyrie",
		image: "https://i.ibb.co/QHLBWsb/Valkyrie-info.png",
		description:
			"A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow!"
	},
	{
		id: 21,
		name: "Golem",
		image: "https://i.ibb.co/GnJnQNP/Golem-info.png",
		description:
			"The mighty Golem loves to soak up damage! When destroyed, it explodes and splits into Golemites. The resulting Golemites have one-fifth the Golem's strength and hitpoints.",
		more: [
			{
				name: "Golemite",
				image: "https://i.ibb.co/Hndv8td/Golmite-info.png",
				description:
					"Golemites are smaller Golems constructed within the gargantuan creature. When the Golem is destroyed, the Golemites spring to life and keep fighting!"
			}
		]
	},
	{
		id: 22,
		name: "Witch",
		image: "https://i.ibb.co/HK8nnRZ/Witch-info.png",
		description:
			"The Witch never fights alone, constantly raising dead warriors from past battles to lead her attacks. Upgraded Witches raise more skeletons at a time",
		more: [
			{
				name: "Skeleton",
				image: "https://i.ibb.co/wc5ZfWD/Skeleton-info.png",
				description:
					"This undead creature poses little threat by itself. But it never fights alone, since the Witch can summon an endless horde of Skeletons against your enemy!"
			}
		]
	},
	{
		id: 23,
		name: "Lava Hound",
		image: "https://i.ibb.co/3frPJmf/Lava-Hound-info.png",
		description:
			"These fiery beasts can't resist chasing after Air Defenses, providing excellent protection for other troops. Once destroyed, they erupt into many smaller, weaker menaces.",
		more: [
			{
				name: "Lava Pup",
				image: "https://i.ibb.co/HdkDgMs/Lava-Pup-info.png",
				description:
					"Thrust out in big numbers after a Lava Hound dies, these tiny creatures keep up the fight for a little while longer."
			}
		]
	},
	{
		id: 24,
		name: "Bowler",
		image: "https://i.ibb.co/LC3VcCH/Bowler-info.png",
		description:
			"This big blue dude digs the simple things in life - Dark Elixir drinks and throwing rocks. His massive boulders bounce off their targets and hit again behind it for a double strike!"
	},
	{
		id: 25,
		name: "Ice Golem",
		image: "https://i.ibb.co/8mX9nNL/Ice-Golem-info.png",
		description:
			"The Ice Golem has a chilling personality and absolutely zero sense of humour. He frosts over everything he touches, freezes his surroundings when destroyed and ices up when talked to at a party. On defense his freeze effect is smaller and has a shorter duration."
	},
	{
		id: 26,
		name: "Headhunter",
		image: "https://i.ibb.co/wJnwMSS/Headhunter-info.png",
		description:
			"Headhunter has just one job: taking out enemy heroes. As her other job, she works at the village apothecary. She's lightweight enough to jump over walls and her poisoned weapons make her targets move and attack slower."
	},
	{
		id: 27,
		name: "Apprentice Warden",
		image: "https://i.ibb.co/1Lb6Bhy/Apprentice-Warden-info.png",
		description:
			"Despite his grand ambitions, Apprentice Warden is still just a student. Supports troops with his magical Life Aura and less-magical slingshot."
	},
	{
		id: 28,
		name: "Super Barbarian",
		image: "https://i.ibb.co/55x6GNW/Super-Barbarian-info.png",
		description:
			"Superior in health, power, speed and most importantly, hair, the Super Barbarians are what regular Barbarians dream of becoming!"
	},
	{
		id: 29,
		name: "Super Archer",
		image: "https://i.ibb.co/HHQ0jsk/Super-Archer-info.png",
		description:
			"Having achieved serious arm strength, the Super Archer can now threaten targets several buildings away."
	},
	{
		id: 30,
		name: "Super Giant",
		image: "https://i.ibb.co/mNXCcVJ/Super-Giant-info.png",
		description:
			"Super Giants are bigger than their ordinary cousins and are great at punching their way through walls. The belt is from the annual village eating contest."
	},
	{
		id: 31,
		name: "Sneaky Goblin",
		image: "https://i.ibb.co/s6n3hV1/Sneaky-Goblin-info.png",
		description:
			"Sneaky Goblins have a talent going unnoticed for a while after being deployed. It's usually the incredibly loud sound of resources being pilfered that gives them away."
	},
	{
		id: 32,
		name: "Super Wall Breaker",
		image: "https://i.ibb.co/p4KhRf3/Super-Wall-Breaker-info.png",
		description:
			"Who knew that rolling was so much superior to running? Super Wall Breakers use pre-ignited bombs that blow up under all circumstances! No more duds!"
	},
	{
		id: 33,
		name: "Rocket Balloon",
		image: "https://i.ibb.co/440y2kc/Rocket-Balloon-info.png",
		description:
			"Retrofitted with two carefully safety-inspected booster rockets, the Rocket Balloon gets a flying start to every battle!"
	},
	{
		id: 34,
		name: "Super Wizard",
		image: "https://i.ibb.co/NL9pNBG/Super-Wizard-info.png",
		description:
			"Super Wizard is positively charged with magical energy! He's either the smartest person in the room... or else he blows the whole room to bits."
	},
	{
		id: 35,
		name: "Super Dragon",
		image: "https://i.ibb.co/b72ssVb/Super-Dragon-info.png",
		description:
			"Sometimes having a fire inside of you isn't enough. The Super Dragon has fires on the inside, outside, and if he gets to do his thing, all around him!"
	},
	{
		id: 36,
		name: "Super Minion",
		image: "https://i.ibb.co/xLfJ43q/Super-Minion-info.png",
		description:
			"Super Minion's big forehead isn't just for show: sniping enemy defenses from a safe distance is simply a brainy move! Especially when you've grown too big to avoid Seeking Air Mines."
	},
	{
		id: 37,
		name: "Super Valkyrie",
		image: "https://i.ibb.co/xjb2DTh/Super-Valkyrie-Info.png",
		description:
			"Not only are Super Valkyries superior to regular Valkyries in every way, they're also way more angry!"
	},
	{
		id: 38,
		name: "Super Witch",
		image: "https://i.ibb.co/dDQ2zKR/Super-Witch-info.png",
		description:
			"Focused magic creates focused results. Instead of summoning hordes of tiny Skeletons, Super Witch summons just one really big skeleton with very formidable bone density.",
		more: [
			{
				name: "Big Boy",
				image: "https://i.ibb.co/GdyyV4D/Big-Boy-info.png",
				description:
					"Always around for his barrel of milk, Big Boy is undoubtedly the biggest skeleton anyone has ever seen. Don't let the looks fool you though, he's a total momma's boy."
			}
		]
	},
	{
		id: 39,
		name: "Ice Hound",
		image: "https://i.ibb.co/JscmCkk/Ice-Hound-info.png",
		description:
			"Free from all the lava-induced indigestion, the Ice Hound is ready to freeze the flow of battle. Chill out, or else.",
		more: [
			{
				name: "Ice Pup",
				image: "https://i.ibb.co/JBMR9ns/Ice-Pup-info.png",
				description:
					"Unlike most Pups, these are cold-hearted with ice coursing through their veins… you know, real cool cats."
			}
		]
	},
	{
		id: 40,
		name: "Super Bowler",
		image: "https://i.ibb.co/725j4y7/Super-Bowler.png",
		description:
			"Super Bowler now has everything he's ever wanted: a grippier glove, more comfortable footwear, and even more ridiculously massive boulders to toss."
	},
	{
		id: 41,
		name: "Super Miner",
		image: "https://i.ibb.co/4Svks3p/Super-Miner-info.png",
		description:
			"Armed with a powerful drill and a magnificent moustache, Super Miner is ready to undermine any rival Village!"
	},
	{
		id: 42,
		name: "Super Hog Rider",
		image: "https://i.ibb.co/2Z12GxM/Super-Hog-Rider-info.png",
		description:
			"This dangerous duo of Hog and Rider are even more superb now. They ride together, they split up and keep fighting together.",
		more: [
			{
				name: "Super Hog",
				image: "https://i.ibb.co/dJ2rJCD/Super-Hog-info.png",
				description:
					"Without its Rider, the Hog jumps over walls and attacks defenses. So what's the Rider even there for in the first place?"
			},
			{
				name: "Super Rider",
				image: "https://i.ibb.co/02GT8qx/Super-Rider-info.png",
				description:
					"A Rider without a Hog is still formidable. He makes it hammer time for any surrounding targets."
			}
		]
	},
	{
		id: 43,
		name: "Ice Wizard",
		image: "https://i.ibb.co/dcJ1zwc/Ice-Wizard-info.png",
		description:
			"This Legendary wizard slows down enemy defenses with destructive shards of ice!"
	},
	{
		id: 44,
		name: "Battle Ram",
		image: "https://i.ibb.co/rswSBsf/Battle-Ram-info.png",
		description:
			"Four Barbarians holding a big log race ahead to batter down their target, dealing big bonus damage if they connect; then they fight on with their swords!",
		more: [
			{
				name: "Barbarian",
				image: "https://i.ibb.co/ZM4Q61F/Barbarian-info.png",
				description:
					"This fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in enemy villages. Release a horde of Barbarians and enjoy the mayhem!"
			}
		]
	},
	{
		id: 45,
		name: "Pumpkin Barbarian",
		image: "https://i.ibb.co/FsjpjkS/Pumpkin-Barbarian-info.png",
		description:
			"Who would've thought that pumpkins make for good makeshift armor? The pumpkin helmets provide these regular Barbarians some extra hitpoints until they get destroyed.",
		more: [
			{
				name: "Barbarian",
				image: "https://i.ibb.co/ZM4Q61F/Barbarian-info.png",
				description:
					"This fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in enemy villages. Release a horde of Barbarians and enjoy the mayhem!"
			}
		]
	},
	{
		id: 46,
		name: "Giant Skeleton",
		image: "https://i.ibb.co/BNv7Fsc/Giant-Skeleton-info.png",
		description:
			"Big boned from early age, the Giant Skeleton was always destined to blow up more than just walls. His massive bomb damages everything around him after he is destroyed."
	},
	{
		id: 47,
		name: "Skeleton Barrel",
		image: "https://i.ibb.co/mzrxfhX/Skeleton-Barrel-info.png",
		description:
			"Is it a bird? Is it a plane? No, just Harry, Larry, Terry and a dozen friends, heading for the nearest building in a barrel of bones",
		more: [
			{
				name: "Skeleton",
				image: "https://i.ibb.co/wc5ZfWD/Skeleton-info.png",
				description:
					"This undead creature poses little threat by itself. But it never fights alone, since the Witch can summon an endless horde of Skeletons against your enemy!"
			}
		]
	},
	{
		id: 48,
		name: "El Primo",
		image: "https://i.ibb.co/nkGRcH1/El-Primo-info.png",
		description:
			"This mysterious masked fighter seemingly turned up out of nowhere, throwing punches that shatter walls with ease! No one knows his true identity, only that he's strong, he's a man and he brawls for your clan."
	},
	{
		id: 49,
		name: "Party Wizard",
		image: "https://i.ibb.co/HFKdr5m/Party-Wizard-info.png",
		description:
			"The distant echo of a kick snare or a high hat can only mean one thing: the Party Wizard is making his grand entrance. Dropping phat beats and massive fireballs, he's the soul of post-battle celebrations."
	},
	{
		id: 50,
		name: "Royal Ghost",
		image: "https://i.ibb.co/kqpVDQX/Royal-Ghost-info.png",
		description:
			"Upset that no one notices him, the Royal Ghost is determined to smash things up until he gets the recognition he deserves. He's so unnoticeable that even walls won't hold him back!"
	},
	{
		id: 51,
		name: "Ram Rider",
		image: "https://i.ibb.co/6Zj52ZT/Ram-Rider-info.png",
		description:
			"She may not know the RAMifications of defeat as this Gingerbread Ram Rider is one tough cookie. This dessert duo is the best combination since Oreo and Juliet and makes Walls crumble like overbaked biscuits."
	},
	{
		id: 52,
		name: "Raged Barbarian",
		image: "https://i.ibb.co/nPwChBM/Raged-Barbarian-info.png",
		description:
			"Why is he so angry, speedy, and vicious? Nobody's brave enough to ask. Maybe it's because he can't find his sword?"
	},
	{
		id: 53,
		name: "Sneaky Archer",
		image: "https://i.ibb.co/89bYcNR/Sneaky-Archer-info.png",
		description:
			"Cloaked under cover of moonlight, Archers can take out targets before ever being seen. Their weakness? Overconfidence."
	},
	{
		id: 54,
		name: "Boxer Giant",
		image: "https://i.ibb.co/PQB1H0n/Boxer-Giant-info.png",
		description:
			"Heavy-handed and built like an ox, these Giants have been practicing their haymaker punch!"
	},
	{
		id: 55,
		name: "Beta Minion",
		image: "https://i.ibb.co/gvdS00w/Beta-Minion-info.png",
		description:
			"Attacks targets from a distance, glows in the dark, and is a maniac on the dance floor."
	},
	{
		id: 56,
		name: "Bomber",
		image: "https://i.ibb.co/vL7pHF8/Bomber-info.png",
		description:
			"With an appetite for destruction and high quality special effects, Bombers blow up anything in sight with bonus damage to Walls!"
	},
	{
		id: 57,
		name: "Baby Dragon",
		image: "https://i.ibb.co/0KxZyQm/Baby-Dragon-info.png",
		description:
			"Cute, snuggly and prone to fire-spitting tantrums. Rampant destruction has never been so adorable."
	},
	{
		id: 58,
		name: "Cannon Cart",
		image: "https://i.ibb.co/X47gYNq/Cannon-Cart-info.png",
		description:
			"A cannon on wheels?! Wait, did it just turn into a mortar?? Bet they won't see that coming! Both powerful and versatile!"
	},
	{
		id: 59,
		name: "Night Witch",
		image: "https://i.ibb.co/ZH1s7RL/Night-Witch-info.png",
		description:
			"Fearlessly summons flocks of flying creatures and, unlike her sister, leaves the grass in pristine condition.",
		more: [
			{
				nane: "Bat",
				image: "https://i.ibb.co/NsBcv0J/Bat-info.png",
				description:
					"Bats are frightfully fast and deadly in swarms, but are easily wiped out by splash damage."
			}
		]
	},
	{
		id: 60,
		name: "Drop Ship",
		image: "https://i.ibb.co/q97LVDn/Drop-Ship-info.png",
		description:
			"Packed to the brim with bones instead of bombs. Skeletons leap out of these balloons directly next to the enemy!",
		more: [
			{
				name: "Skeleton",
				image: "https://i.ibb.co/9ZpCv6D/Drop-Ship-Skeleton-info.png",
				destruction:
					"This undead creature poses little threat by itself. But it never fights alone, since the Drop Ship can throw an endless horde of Skeletons at your enemies!"
			}
		]
	},
	{
		id: 61,
		name: "Power P.E.K.K.A",
		image: "https://i.ibb.co/3hHzPB8/Super-P-E-K-K-A-info.png",
		description:
			"Unstable energy radiates from this powerful suit of dark armor, waiting to be unleashed!"
	},
	{
		id: 62,
		name: "Hog Glider",
		image: "https://i.ibb.co/H7b5BJT/Hog-Glider-info.png",
		description:
			"The real riders in the sky. They have a good track record in getting over walls, but are not very good at avoiding crashes.",
		more: [
			{
				name: "Hog Rider",
				image: "https://i.ibb.co/WPK33fv/Hog-Rider-info.png",
				description:
					"Having tamed the fierce leaping hog, the Hog Rider punishes those who hide behind their puny walls! Fueled by Dark Elixir, these warriors have never known defeat!"
			}
		]
	}
];
