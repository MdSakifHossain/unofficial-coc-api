import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

// importing troops
import { troops } from "./troops/troops.js";

app.get("/", (req, res) => {
	res.json({
	    message: "Wellcome to The Clsh Of Clans API (Unofficial)",
	    description: "This api is just a simple project for my learning stuff.",
	    totalTroops: 27,
	    routes: [
	        "/",
	        "/api/troops/",
	        "/api/troops/:id",
	    ]
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
	console.log(`it's alive on port ${PORT}`);
});
