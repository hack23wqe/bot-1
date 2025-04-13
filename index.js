const { Client, GatewayIntentBits } = require("discord.js");
const keepAlive = require("./server");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

const TOKEN = "MTM2MDAyNzA2MDA5NzI1NzUyMg.GP_qfD.cXFRW3S5a3vR_MKxzkZVnHfJgF8txnhUDdF3IA"; // reemplazá esto con tu token real

client.on("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "!apelacion") {
    try {
      await message.author.send("⚠️ Fuiste baneado, pero podés apelar aquí: https://dyno.gg/form/173545c5");
      await message.reply("✅ Te envié un mensaje privado con la apelación.");
    } catch (err) {
      console.error("❌ No se pudo enviar el DM:", err);
      await message.reply("❌ No pude enviarte un mensaje privado. Asegurate de tener los DMs abiertos.");
    }
  }
});

keepAlive();
client.login(TOKEN);
