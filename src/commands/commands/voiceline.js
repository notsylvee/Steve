module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Steve voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "I... am Steve",
            "The Nether",
            "Flint and steel!",
            "RELEASE!",
            "Dont worry, im gonna cushion our fall with this water bucket. RELEASE!",
            "COMIN IN HOT!",
            "This... is a crafting table",
            "Chicken jockey!",
            "Diamond Armor, full set",
            "The stash",
            "Theyre the Villagers!",
            "As a child, I yearned for the mines",
            "WATER BUCKET",
            "An Ender Pearl. Teleports you to wherever you throw it",
            "Ever wonder what happens when you mix hot lava and chicken?",
            "Blades for days",
            "Pink house!",
            "Boots of swiftness",
            "They love crushin a loaf",
            "First we mine, then we craft. LET'S MINECRAFT",
            "L-L-L-Lava, Ch-Ch-Ch-Chicken, Steve's Lava Chicken yeah it's tasty as hell, ooh mamacita now you're ringing the bell, crispy and juicy now you're having a snack, ooh super spicy its a lava ATTAAAAAACK!",
            "SLIME CUBE!"
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}`, ephemeral: false });
      },
}