
require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAXaeBh837k38o_lwSADet8UTO7X21DGsY"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



 client.on("message", m => {
  if (m.content === ".Help") {
    let ListofallCommands = "https://mardinbot.glitch.me";
    var addserver ="https://discord.com/api/oauth2/authorize?client_id=698912060142125107&permissions=151003168&scope=bot ";
    var SUPPORT = "https://discord.gg/XSJk8Sa";
    let embed = new Discord.RichEmbed().setTitle(`Helpful Links`)
        .setFooter(
        `BestBot`,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
    .setThumbnail('https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048')
    .setColor('#FFFF00')
    .setDescription(`                                                                                                               
**[Add To Your Server ](${addserver})**    
**[List-of-all-Commands](${ListofallCommands})**
**[ Server Support](${SUPPORT})**`);
    m.react("✨");
    m.author.send(embed);
  }
}); 

 client.on("message", m => {
  if (m.content === ".help") {
    let ListofallCommands = "https://mardinbot.glitch.me";
    var addserver ="https://discord.com/api/oauth2/authorize?client_id=698912060142125107&permissions=151003168&scope=bot ";
    var SUPPORT = "https://discord.gg/XSJk8Sa";
    let embed = new Discord.RichEmbed().setTitle(`Helpful Links`)
       .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
    .setThumbnail('https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048')
    .setColor('#FFFF00')
    .setDescription(`                                                                                                               
**[Add To Your Server ](${addserver})**    
**[List-of-all-Commands](${ListofallCommands})**
**[ Server Support](${SUPPORT})**`);
    m.react("✨");
    m.author.send(embed);
  }
}); 
///////////
client.on("message", m => {
  if (m.content === ".Invite") {
   
    var addserver ="https://discord.com/api/oauth2/authorize?client_id=698912060142125107&permissions=151003168&scope=bot ";
    var SUPPORT = "https://discord.gg/XSJk8Sa";
    let embed = new Discord.RichEmbed().setTitle(`Invite Links`)
        .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
    .setThumbnail('https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048')
    .setColor('#FFFF00')
    .setDescription(`                                                                                                               

**[Add To Your Server ](${addserver})**    
**[ Server Support](${SUPPORT})**`);
    m.react("✨");
    m.author.send(embed);
  }
}); 
 client.on("message", m => {
  if (m.content === ".invite") {
   
    var addserver ="https://discord.com/api/oauth2/authorize?client_id=698912060142125107&permissions=151003168&scope=bot ";
    var SUPPORT = "https://discord.gg/XSJk8Sa";
    let embed = new Discord.RichEmbed().setTitle(`Invite Links`)
        .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
    .setThumbnail('https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048')
    .setColor('#FFFF00')
    .setDescription(`                                                                                                               

**[Add To Your Server ](${addserver})**    
**[ Server Support](${SUPPORT})**`);
    m.react("✨");
    m.author.send(embed);
  }
}); 
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == ".setMedia")
    var DrBOYKA = new Discord.RichEmbed()
      .setThumbnail("https://images-ext-1.discordapp.net/external/E4LTEf8rnd_mI_fh1dBLOsOH6b-yrBLuGIJyiT1YbmQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/698912060142125107/6833048c3551a0fc656ee33bd09a4cdc.png?width=473&height=473")
      
.setColor('#FFFF00')
   .addField("``.setMedia Channel Name``", `👆 `)
.addField("``.setMedia gallery ``", `👆 `)
  .addField("``.toggleMedia  off / on ``", `👆 `)
   .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
  message.channel.send(DrBOYKA);
});

const pics = JSON.parse(fs.readFileSync("./pics.json", "utf8"));
client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setMedia")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send(" ")  ;

    let embed = new Discord.RichEmbed()
      .setTitle("**Done The MediaOnly Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By", `${message.author}`)
      .setColor("#FFFF00")
      .setThumbnail(message.author.avatarURL)
      .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
    message.channel.sendEmbed(embed);
    (pics[message.guild.id] = {
      channel: room,
      onoff: "On"
    }),
      fs.writeFile("./pics.json", JSON.stringify(pics), err => {
        if (err) console.error(err);
      });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleMedia")) {
    if (!message.channel.guild) return;

    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!pics[message.guild.id])
      pics[message.guild.id] = {
        onoff: "Off"
      };
    if (pics[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`  **__The Media Is ON__**  `),
        (pics[message.guild.id].onoff = "On")
      ];
    if (pics[message.guild.id].onoff === "On")
      return [
        message.channel.send(` **__The Media Is OFF__** `),
        (pics[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./pics.json", JSON.stringify(pics), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;

  if (!pics[message.guild.id])
    pics[message.guild.id] = {
      onoff: "Off"
    };
  if (pics[message.guild.id].onoff === "Off") return;

  if (message.channel.name !== `${pics[message.guild.id].channel}`) return;

  let types = ["jpg", "jpeg", "png", "http://prntscr.com/"];
  if (message.attachments.size <= 0) {
    message.delete();
    message.channel
      .send(`${message.author}, **This Channel For Media 🖼️ Only !** `)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000);
      });
    return;
  }
  if (message.attachments.size >= 1) {
    let filename = message.attachments.first().filename;
    console.log(filename);
    if (!types.some(type => filename.endsWith(type))) {
      message.delete();
      message.channel
        .send(`${message.author}, **This Channel For Media 🖼️ Only !** `)
        .then(msg => {
          setTimeout(() => {
            msg.delete();
          }, 5000);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "infoMedia")) {
    let embed = new Discord.RichEmbed()

      .addField("Channel Status", `${pics[message.guild.id].onoff}`)
.setColor ('#FFFF00')
      .addField("Media Channel", `${pics[message.guild.id].channel}`)

      .addField("Requested By", `${message.author}`)
.setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
      .setThumbnail(message.author.avatarURL)


    message.channel.sendEmbed(embed);
  }
});





client.on("ready", () => {
  const cost = client.guilds.size;

  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(".help ");
  client.user.setStatus("idle");
});

/////
const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8"));
client.on("message", async message => {
  let messageArray = message.content.split(" ");
  if (message.content.startsWith(prefix + "setLeave")) {
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;

    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send("You don't have permission").then(msg => {
        msg.delete(4500);
        message.delete(4500);
      });

    message.channel
      .send(":pencil: **| Please write your message now... :pencil2: **")
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ["time"]
          })
          .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg
              .edit(
                ":scroll: **| Type the name of the room now... :pencil2: **"
              )
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 90000,
                    errors: ["time"]
                  })
                  .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg
                      .edit("✅ **| The setup was successful...  **")
                      .then(msg => {
                        message.channel.awaitMessages(filter, {
                          max: 1,
                          time: 90000,
                          errors: ["time"]
                        });
                        let embed = new Discord.RichEmbed()
                          .setTitle(
                            "**Done The Leave Msg Code Has Been Setup**"
                          )
                    .addField("``.toggleLeave ``", ` off / on `)
                        .addField("``Message:``", `${thisMessage}`)
                          .addField("``Channel:``", `${boi}`)
                          .setColor("#FFFF00")
                          .setThumbnail("https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
                          .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
                        message.channel.sendEmbed(embed);
                        welcome[message.guild.id] = {
                          leavechannel: boi,
                          leavemsg: thisMessage,
                          onoff: "On",
                          leave: "On"
                        };
                        fs.writeFile(
                          "./welcomer.json",
                          JSON.stringify(welcome),
                          err => {
                            if (err) console.error(err);
                          }
                        );
                      });
                  });
              });
          });
      });
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == ".setWelcomer")
    var DrBOYKA = new Discord.RichEmbed()
      .setThumbnail("https://images-ext-1.discordapp.net/external/E4LTEf8rnd_mI_fh1dBLOsOH6b-yrBLuGIJyiT1YbmQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/698912060142125107/6833048c3551a0fc656ee33bd09a4cdc.png?width=473&height=473")
      
  .setColor('#FFFF00')
   .addField("``.setWelcomer Channel Name``", `👆 `)
.addField(" ``.setWelcomer Welcome`` ", `👆 `)
  .addField("``.toggleWelcome off``", '👆')
   .addField("``.toggleInvitedby on/off``", '👆')
 .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
  message.channel.send(DrBOYKA);
});

client.on("message", message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find("name", `${room}`);
  if (message.content.startsWith(prefix + "setWelcomer")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom) return message.channel.send("");
    let embed = new Discord.RichEmbed()
      .setTitle("**Done The Welcome Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("#FFFF00")
      .setThumbnail(message.author.avatarURL)
     .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
    message.channel.sendEmbed(embed);
    welcome[message.guild.id] = {
      channel: room,
      onoff: "On",
      by: "On",
      dm: "Off",
      leave: "Off"
    };
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), err => {
      if (err) console.error(err);
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleLeave")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off",
        leave: "Off"
      };
    if (welcome[message.guild.id].leave === "Off")
      return [
        message.channel.send(`**The Leave Msg Is 𝐎𝐍 !**`),
        (welcome[message.guild.id].leave = "On")
      ];
    if (welcome[message.guild.id].leave === "On")
      return [
        message.channel.send(`**The Leave Msg Is 𝐎𝐅𝐅 !**`),
        (welcome[message.guild.id].leave = "Off")
      ];
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleWelcome")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        onoff: "Off"
      };
    if (welcome[message.guild.id].onff === "Off")
      return [
        message.channel.send(`**The Welcome Is 𝐎𝐍 !**`),
        (welcome[message.guild.id].onoff = "On")
      ];
    if (welcome[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The Welcome Is 𝐎𝐅𝐅 !**`),
        (welcome[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});


client.on("message", message => {
  if (message.content.startsWith(prefix + "toggleInvitedby")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!welcome[message.guild.id])
      welcome[message.guild.id] = {
        by: "Off"
      };
    if (welcome[message.guild.id].by === "Off")
      return [
        message.channel.send(`**The Invited By Is 𝐎𝐍 !**`),
        (welcome[message.guild.id].by = "On")
      ];
    if (welcome[message.guild.id].by === "On")
      return [
        message.channel.send(`**The Invited By Is 𝐎𝐅𝐅 !**`),
        (welcome[message.guild.id].by = "Off")
      ];
    fs.writeFile("./welcome.json", JSON.stringify(welcome), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("guildMemberRemove", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off",
      leave: "Off"
    };

  if (welcome[member.guild.id].onoff === "Off") return;
  if (welcome[member.guild.id].leave === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].leavechannel}`
  );
  if (!welcomer) return;
  welcomer.send(`${member} ${welcome[member.guild.id].leavemsg}`);
});

client.on("guildMemberAdd", member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off"
    };
  if (welcome[member.guild.id].onoff === "Off") return;
  let welcomer = member.guild.channels.find(
    "name",
    `${welcome[member.guild.id].channel}`
  );
  let memberavatar = member.user.avatarURL;
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("ar-ly");
    var h = member.user;
    let heroo = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      
      .setDescription("**Welcome to server thanks for join.**")
      .addField(" **Number of member Server.** ", member.guild.memberCount + "")
     
    welcomer.send({ embed: heroo });
  }
});

client.on("guildMemberAdd", async member => {
  if (!welcome[member.guild.id])
    welcome[member.guild.id] = {
      onoff: "Off"
    };
  if (welcome[member.guild.id].onoff === "Off") return;
  const Canvas = require("canvas");
  const jimp = require("jimp");
  const w = [
    "https://cdn.discordapp.com/attachments/698735481663520799/698779012381802537/FB_IMG_1586668132607.jpg"
  ];
  let Image = Canvas.Image,
    canvas = new Canvas(800, 300),
    ctx = canvas.getContext("2d");
  ctx.patternQuality = "bilinear";
  ctx.filter = "bilinear";
  ctx.antialias = "subpixel";
  ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.stroke();
  ctx.beginPath();

  fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function(
    err,
    Background
  ) {
    if (err) return console.log(err);
    let BG = Canvas.Image;
    let ground = new Image();
    ground.src = Background;
    ctx.drawImage(ground, 0, 0, 800, 300);
  });

  let url = member.user.displayAvatarURL.endsWith(".webp")
    ? member.user.displayAvatarURL.slice(5, -20) + ".png"
    : member.user.displayAvatarURL;
  jimp.read(url, (err, ava) => {
    if (err) return console.log(err);
    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);

      ctx.font = "36px Arial";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(member.user.username, 545, 177);

      ctx.font = "16px Arial Bold";
      ctx.fontSize = "72px";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.fillText(`Your The Member ${member.guild.memberCount}`, 580, 200);

      let Avatar = Canvas.Image;
      let ava = new Avatar();
      ava.src = buf;
      ctx.beginPath();
      ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(ava, 36, 21, 260, 260);

      let c = member.guild.channels.find(
        "name",
        `${welcome[member.guild.id].channel}`
      );
      if (!c) return;
      c.sendFile(canvas.toBuffer());
    });
  });
});
/////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == ".member")
    var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
.setColor('#FFFF00')
      .setTitle(":tulip:| Members info")
      .addBlankField(true)

      .addField(
        ":green_book:|  online",
        `${
          message.guild.members.filter(m => m.presence.status == "online").size
        }`
      )
      .addField(
        ":closed_book:| Do Not Disturb",
        `${message.guild.members.filter(m => m.presence.status == "dnd").size}`
      )
      .addField(
        ":orange_book:|ldie ",
        `${message.guild.members.filter(m => m.presence.status == "idle").size}`
      )
      .addField(
        ":notebook:|  Ofline ",
        `${
          message.guild.members.filter(m => m.presence.status == "offline").size
        }`
      )
 .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
    .addField("all member", `${message.guild.memberCount}`);

  message.channel.send(IzRo);
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == ".Member")
    var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setColor('#FFFF00')
    .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(":tulip:| Members info")
      .addBlankField(true)

      .addField(
        ":green_book:|  online",
        `${
          message.guild.members.filter(m => m.presence.status == "online").size
        }`
      )
      .addField(
        ":closed_book:| Do Not Disturb",
        `${message.guild.members.filter(m => m.presence.status == "dnd").size}`
      )
      .addField(
        ":orange_book:|ldie ",
        `${message.guild.members.filter(m => m.presence.status == "idle").size}`
      )
      .addField(
        ":notebook:| Ofline ",
        `${
          message.guild.members.filter(m => m.presence.status == "offline").size
        }`
      )
      .setFooter(
        
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
    .addField("all member", `${message.guild.memberCount}`);
  message.channel.send(IzRo);
});

//═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═╮

client.on("message", message => {
let prefix = ".";
let args = message.content.split(' ');
  if(args[0].toLowerCase() === (prefix + "server")) {
        let embed = new Discord.RichEmbed()

     
    
        .addField(`:id: Server ID:`, `${message.guild.id}`, true)
        .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("EN-eg").fromNow()}`,true)
         .addField("**:crown: Owned by**", `**${message.guild.owner}**`, true)
        .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
      
        .addField( "**🤖The number of bots**",
        `** [${message.guild.members.filter(m => m.user.bot).size}] **`,true)
      
        
        .setColor("#FFFF00")
      .setFooter(
         `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
        .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
        .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} `, true)  
        .addField(`:closed_lock_with_key: Roles [${message.guild.roles.size}]`, `To see the whole list with all roles use **${prefix}roles**`, true)
         .addField(`😊 emojis [${message.guild.emojis.size}]`, `To see the whole list with all emojis use **${prefix}emojis**`, true)
        .setThumbnail(`${message.guild.iconURL}`)
        
        .setTimestamp()
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`);
        
    message.channel.sendEmbed(embed);
    }
 
});

client.on('message', message => {
       if (message.content.startsWith(prefix + 'tbot')) {
     let msg =  client.guilds.map(guild => `**${guild.name}  ${guild.owner} ${guild.id} ** name server of  id server: `).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}bots of list server `)
  .setDescription(`${msg}`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "movall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });

    message.channel.send(`**All members have been dragged to your audio Rom.🤪**`);
  }
});

///////////////////////////////////////////////////////////////


client.on('message', message => {
 
    if (message.content === ".lock") {
                        if(!message.channel.guild) return  message.channel.send(' This is only for servers !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send('');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
                message.channel.send(`🔒** <#${message.channel.id}> has been locked.**`)
           });
             }
if (message.content === ".unlock") {
    if(!message.channel.guild) return  message.channel.send(' This is only for servers !!');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return  message.channel.send('');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.channel.send(`🔓** <#${message.channel.id}> has been locked.**`)
           });
             }
 
 
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "Movall")) {
    if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send("**:x: You Dont Have Perms `MOVE_MEMBERS`**");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null)
      return message.channel.send(`**You Have To Be In Room Voice**`);
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });

    message.channel.send(`**All members have been dragged to your audio Room.**`);
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "Say") {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "❌|**`MANAGE_GUILD`You do not have powers`**  "
      );

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});

///////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "❌|**`MANAGE_GUILD`You do not have Permission`**  "
      );

    message.channel.sendMessage(args.join("  "));
    message.delete();
  }
});


//──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═-═──═╮
client.on("message", message => {
  var prefix = ".";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "Move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("Use : " + prefix + "move @user");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#FFFF00")

            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel`
            );
          var embed = new Discord.RichEmbed()

            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("#FFFF00")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer  ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});
////////////////
client.on("message", message => {
  var prefix = ".";
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("**Use : " + prefix + "move @User**");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#FFFF00")

            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel`
            );
          var embed = new Discord.RichEmbed()

            .setTitle(`You are Moved in ${message.guild.name}`)
            .setColor("#FFFF00")
            .setDescription(
              `**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "`You Cant Move" +
              message.mentions.members.first() +
              " `The User Should Be In channel To Move It`"
          );
        }
      } else {
        message.channel.send(
          "**``You Should Be In Room Voice To Move SomeOne``**"
        );
      }
    } else {
      message.react("❌");
    }
  }
});

//////////////////////////////////////////////////////////////////



////////////
client.on("message", message => {
  let prefix = ".";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "embed") {
    if (!message.channel.guild)
      return message.reply(" This command only for servers ");
    let say = new Discord.RichEmbed()

      .setDescription(args.join("  "))
      .setColor("#FFFF00");

    message.channel.sendEmbed(say);
   
  }
});

///////////*///////////////////////////////////////////*////////////////////////////////////////////

client.on("message", message => {
  let args = message.content.split(" ");
 if (args[0].toLowerCase() === `${prefix}avatar`) {
  let member = message.mentions.users.first();
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor("#FFFF00")
    .setTitle("Avatar Link")
    .setURL(`${message.author.avatarURL}`)
    .setImage(`${message.author.avatarURL}`)
.setFooter("Requested by" + message.author.tag, message.author.avatarURL)
     message.channel.sendEmbed(emb);
  }
  if(member) {
      const embed = new Discord.RichEmbed()
      .setAuthor(member.tag, member.avatarURL)
      .setColor("#FFFF00")
      .setTitle("Avatar Link")
      .setURL(`${member.avatarURL}`)
      .setImage(`${member.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {
    const embed = new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setColor("#FFFF00")
      .setTitle("Avatar Link")
      .setURL(`${user.avatarURL}`)
      .setImage(`${user.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
  })
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////8////////////////////////////////////////
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .sendMessage(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": message has been deleted" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .sendMessage(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": message has been deleted" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES ")
          .setColor("#FFFF00");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

/////////////////////////////////////////////////////////////////////////////////////////

client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
   
  
    .setColor("#FFFF00")
    .setDescription(
      `  **Bot Prefix ( . )`
    );

  guild.owner.send(embed);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



client.on("message", async msg => {
  if (msg.content.startsWith(".leaveall")) {
    if (msg.author.id !== "536993685863137303") return;
    client.guilds.forEach(guild => {
      guild.leave();
    });
    msg.channel.send("Leaving from all servers..");
  }
});

client.on("message", message => {
  if (message.content.includes("discord.gg")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermissions(["MANAGE_GUILD"])) {
      message.delete();
      return message.reply(
        `** Not allowed to advertising Here!:no_mouth::angry:  **`
   
      );
    }
  }
});


client.on('guildCreate', guild => {
  client.channels.get("727464392009973853").send(`【 **best bot zyat kra bo am servara** 】
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("727464451887857724").send(`【 **best bot kick kra lam servara ** 】
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on("message", function(message) {
  if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    var Dark = new Discord.RichEmbed()
      .setColor("#FFFF00")
      .setTimestamp()
      .setTitle("``! You have received a new message in private!``")
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(
        `From ${
          message.author.tag
        } (${message.author.presence.status.toUpperCase()})`
      );
    client.channels.get("727464451887857724").send({ embed: Dark });
  }
});
//////////////// البرفكس

client.on("message", message => {
  if (message.content.startsWith(prefix + "setnick")) {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("MANAGE_NICKNAMES") ||
      !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")
    )
      return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args)
      return message.channel.send(
        `**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`
      );
    message.guild.member(user.user).setNickname(`${nick}`);
    message.channel.send(
      `Successfully changed **${user}** nickname to **${nick}**`
    );
  }
});
/////////////////////////////////////////////////
const google = require("google-it");
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "google")) {
    const input = args.join(" ");

    google({ query: input, disableConsole: true })
      .then(results => {
        return message.channel.send(
          `\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`
        );
      })
      .catch(error => {
        if (error) throw error;
      });
  }
});

/////////////////////////////////////////////////







client.on('message', msg => {
 if(!msg.channel.guild) return;
        let user = msg.guild.member (msg.mentions.members.first() || msg.author);
 if (msg.content.startsWith(prefix + 'myrole')) {
    const DrBOYKA = new Discord.RichEmbed()
.setThumbnail(msg.author.avatarURL)
.setColor("#FFFF00")
.setTitle ('`User Roles information`')
.addField ("Roles: ", user.roles.filter (r => r.name !== "@everyone").map (m =>"<@&" +m.id+">").join("\n"), true)
.setFooter(
        `MardinBot `,
        "https://images-ext-1.discordapp.net/external/E4LTEf8rnd_mI_fh1dBLOsOH6b-yrBLuGIJyiT1YbmQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/698912060142125107/6833048c3551a0fc656ee33bd09a4cdc.png?width=473&height=473"
      )
    msg.channel.send(DrBOYKA)
  }
});





///////////////

client.on('message', message =>{
   if(message.content.startsWith(prefix + "User")) {
    const membre = message.mentions.members.first() || message.member;
       let embed1 = new Discord.RichEmbed()
      .setColor("#FFFF00")
       .setAuthor(message.guild.name,message.guild.iconURL)
       .setTitle(`${membre.user.username} :`)
       .setThumbnail(membre.user.avatarURL)
       .addField("`Joined Discord At :`",`__${moment.utc(membre.user.createdAt).format("LL")}__`,true)
        .addField("`Joined Server At :`",`__${moment.utc(membre.joinedAt).format('LL')}__`,true)
         
       .setFooter(membre.user.id,"https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
    .setFooter(
        `MardinBot `,
        "https://images-ext-1.discordapp.net/external/E4LTEf8rnd_mI_fh1dBLOsOH6b-yrBLuGIJyiT1YbmQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/698912060142125107/6833048c3551a0fc656ee33bd09a4cdc.png?width=473&height=473"
      )
       message.channel.sendEmbed(embed1);
   }
});




client.on('message', message =>{
   if(message.content.startsWith(prefix + "user")) {
    const membre = message.mentions.members.first() || message.member;
       let embed1 = new Discord.RichEmbed()
      .setColor("#FFFF00")
       .setAuthor(message.guild.name,message.guild.iconURL)
       .setTitle(`${membre.user.username} :`)
       .setThumbnail(membre.user.avatarURL)
     
       .addField("`Joined Discord At :`",`__${moment.utc(membre.user.createdAt).format("LL")}__`,true)
        .addField("`Joined Server At :`",`__${moment.utc(membre.joinedAt).format('LL')}__`,true)
        .setFooter(membre.user.id,"https://images-ext-1.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
       message.channel.sendEmbed(embed1);
   }
});



      
  //--------------
client.on('message', message => {
    if (message.content.startsWith(prefix + 'roles')) {
 
        const Rank = message.guild.roles.map(e => e.toString()).join(" ");

     
        const RankList = new Discord.RichEmbed()
            .setTitle('>  __**Get a list of server roles **__ ')
            .setAuthor(message.guild.name, message.guild.iconURL)
             
         .setColor("#FFFF00")
            .setDescription(Rank)
            .setFooter(message.guild.name)
        .addField(
        "**:closed_lock_with_key:  Roles**",
        `** __${message.guild.roles.size}__ **`,
        true
      )
        .setFooter(
        `BestBot `,
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048")
        message.channel.send(RankList)
    }
});








client.on("message", message => {

  let PREFIX = ".";
  
  if (message.content.startsWith(PREFIX + "emojis")) {
    
    const List = message.guild.emojis.map(e => e.toString()).join(" ");

    const EmojiList = new Discord.RichEmbed()
    
      .setTitle("**__Emojis__**")
    
     .addField(`😊 emojis [${message.guild.emojis.size}]`, `Size`, true)
    
    .setAuthor(message.guild.name, message.guild.iconURL)
    
       .setColor("#FFFF00")
    
      .setDescription(List)
    
       .setFooter(
         
        `BestBot `,
         
        "https://cdn.discordapp.com/avatars/727433207045161020/45d6148f7301d0a366a511065100fceb.png?size=2048"
      )
   
    message.channel.send(EmojiList);
  }
});
/////******************************


   


/////-------------------------------------------------------------------------------------------------------------------------///-------------------------------------------------------------------------------------------------------------------------------------------------


client.login('NzI4NTIyNDc3NTYyNzU3MjEy.Xv7ncw.tJ6_LDd5_Vg10uNGbMukGOeD0HI');


