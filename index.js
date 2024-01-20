import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const alive_message = `It's alive on port ${PORT}! 🎉🚀🔥🌟🎊✨💻👾💥🙌 #ExcitingTimes 🎈🎆🌈🌌🎮🎵📡🕹️🌠💫💯🔮🤖`;

// importing troops
import { troops } from "./troops/troops.js";

app.get("/", (req, res) => {
	res.json({
		message:
			"🌟 Welcome to ⚔️ The Clash Of Clans API ⚔️ (Unofficial) 🌟 – Embark on an exciting learning adventure with us! 🚀🏰",
		description:
			"This API serves as a valuable learning endeavor for me, representing a simple yet meaningful project in my educational journey.",
		totalTroops: troops.length,
		routes: ["/", "/api/troops/", "/api/troops/:id"]
	});
});

app.get("/api/troops/", (req, res) => {
	res.json(troops);
});

app.get("/api/troops/:id", (req, res) => {
	const troop = troops.find(troop => troop.id === parseInt(req.params.id));

	if (!troop) {
		res.status(404).json({
			error: `troop with given id of ${req.params.id} isn't available`
		});
	}

	res.json(troop);
});

app.listen(PORT, () => {
	console.log(alive_message);
});
