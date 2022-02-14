const Discord = require("discord.js");
require("dotenv").config()

const TOKEN = "OTQyNzQyMTU4NDg4NzcyNjM4.Ygo7DQ.6lDTEaZrBpZFzLrWCsU_FMMog_E";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"

    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (Message) => {
    if (Message.content == "Sveiki") {
        Message.react(":clown:")
    }
})

client.login(process.env.TOKEN)
