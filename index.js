import express from "express";

import { config } from "dotenv";
import { launchWhatsappMailing } from "./waMailing.js";
import { launchTelegramMailing } from "./tgMailing.js";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.post("/send-notification", async (req, res) => {
    try {
        console.log("Heeeereee");
        const { phoneNumber, messenger } = req.body;
        console.log({ phoneNumber, messenger });
        if (!phoneNumber || !messenger) return res.status(400).send({ error: "Missing required field" });

        if (messenger === "whatsapp") {
            await launchWhatsappMailing(phoneNumber);
        } else if (messenger === "telegram") {
            await launchTelegramMailing(phoneNumber);
        }

        return res.send("Message sent successfully");
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message, errors: err.errors });
    }
});

const launch = async () => {
    try {
        app.listen(PORT, () => console.log(`Server is currently running on port: ${PORT}`));
    } catch (e) {
        console.error(e);
    }
}

launch();