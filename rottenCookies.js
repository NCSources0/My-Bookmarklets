Game.registerMod("Rotten Cookies", {
  init: function () {
    img =
      "https://ncsources0.github.io/My-Bookmarklets/rottenCookies.png";
    if (Game.ready) {
      this.createAchievements();
    } else Game.registerHook("create", this.createAchievements);
    Game.registerHook("check", this.checkAchievements);
  },
  createAchievements: function () {
    this.achievements = [];
    this.achievements.push(
      new Game.Achievement(
        "Wake up and bake",
        "Play <b>Cookie Clicker</b> before <b>7am</b>.",
        [1, 0, img],
        (order = 0)
      ),
      new Game.Achievement(
        "The thing maker",
        "Change your bakery's name to <b>NCSources</b>",
        [0, 0, img]
      ),
      (Game.last.pool = "shadow")
    );
    LocalizeUpgradesAndAchievs();
  },
  checkAchievements: function () {
    Game.Win("Third-party");
    if (new Date().getHours() < 7) Game.Win("Wake up and bake");
    if (Game.bakeryName == "ncsources" || Game.bakeryName == "ncsources0") Game.Win("The thing maker");
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
