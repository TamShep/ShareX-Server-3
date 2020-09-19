const { MessageEmbed } = require('discord.js-light');

const userModel = require('../../models/user');

let name = 'userinfo';
let aliases = ['ui'];
let run = async (msg, args) => {
    if (!args[0]) return msg.channel.send(new MessageEmbed()
        .setTitle(`You must include the name of a user.`)
        .setColor('#e9172b'));

    let uName = args[0];

    let userData = await userModel.findOne({ name: uName });

    if (userData == null) return msg.channel.send(new MessageEmbed()
        .setTitle('User does not exist.')
        .setColor('#e9172b'));

    return msg.channel.send(new MessageEmbed()
        .setTitle(`User: \`${uName}\``)
        .setDescription(`Key: \`${userData.key}\`\Owner: \`${userData.owner}\`\Uploads: \`${userData.uploads}\`\Redirects: \`${userData.redirects}\`\n`)
        .setColor('#e9172b'));
};

module.exports = { name, aliases, run };