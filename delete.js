const axios = require("axios");

async function run(teamKey) {
  const result = await axios.get(
    "https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/football_session/football.json"
  );

  let goals = 0;

  result.data.rounds.forEach((round) =>
    round.matches.forEach((match) => {
      if (match["team1"].key === teamKey) {
        goals += match["score1"];
      }
      if (match["team2"].key === teamKey) {
        goals += match["score2"];
      }
    })
  );

  return goals;
}

(async () => {
  console.log(await run("arsenal"));
})();
