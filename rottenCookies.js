Game.registerMod("rottenCookies", {
  init: function () {
    img = "http://raw.githubusercontent.com/NCResources/My-Cookie-Clicker-Mods/main/rottenCookies.png";
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
    this.achievements = [];
    this.achievements.push(
      new Game.Achievement(
        "Get Started",
        "Boot up the game for the first time",
        [0, 1, img]
      )
    );
    LocalizeUpgradesAndAchievs();
  },
  checkAchievements: function () {
    Game.Win("Get Started");
  },
  save: function () {
    let str = "";
    for (let i of this.achievements) str += i.won;
    return str;
  },
  load: function (str) {
    for (let i in this.achievements) this.achievements[i].won = Number(str[i]);
  },
});
