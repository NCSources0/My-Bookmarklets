Game.registerMod("Rotten Cookies", {
  init: function () {
    ncs = this;
    img = "https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.png";
    if (Game.ready) {
      ncs.createAchievements();
      Game.Notify(
        "Successfully Installed Mod!",
        "<b>Rotten Cookies</b><q>they're suprisingly good</q>",
        [0, 0, img]
      );
    } else Game.registerHook("create", ncs.createAchievements);
    Game.registerHook("check", ncs.checkAchievements);
  },
  createAchievements: function () {
    ncs.achievements = [];
    ncs.achievements.push(
      new Game.Achievement(
        "Wake up and bake",
        "Play <b>Cookie Clicker</b> before <b>7am</b>.",
        [0, 1, img]
      )
    );
    LocalizeUpgradesAndAchievs();
  },
  checkAchievements: function () {
    if (new Date().getHours() < 7) Game.Win("Wake up and bake");
  },
  save: function () {
    let str = "";
    for (let i of ncs.achievements) str += i.won;
    return str;
  },
  load: function (str) {
    for (let i in ncs.achievements) ncs.achievements[i].won = Number(str[i]);
  },
});
