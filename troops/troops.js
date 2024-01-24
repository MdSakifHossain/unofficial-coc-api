// troops.js
import { elixir_troops } from "./elixir_troops.js";
import { dark_elixir_troops } from "./dark_elixir_troops.js";
import { super_troops } from "./super_troops.js";
import { builder_base_troops } from "./builder_base_troops.js";
import { clan_capital_troops } from "./clan_capital_troops.js";
import { hero_troops } from "./hero_troops.js";
import { temporary_troops } from "./temporary_troops.js";
import { elixir_spells } from "./elixir_spells.js";
import { dark_elixir_spells } from "./dark_elixir_spells.js";
import { clan_capital_spells } from "./clan_capital_spells.js";
import { seige_machines } from "./siege_machines.js";
import { pets } from "./pets.js";
import { non_combatants } from "./non_combatants.js";
import { hero_equipments } from "./hero_equipments.js";

export const troops = [
	...elixir_troops,
	...dark_elixir_troops,
	...super_troops,
	...builder_base_troops,
	...clan_capital_troops,
	...hero_troops,
	...temporary_troops,
	...elixir_spells,
	...dark_elixir_spells,
	...clan_capital_spells,
	...seige_machines,
	...pets,
	...non_combatants,
	...hero_equipments
];
