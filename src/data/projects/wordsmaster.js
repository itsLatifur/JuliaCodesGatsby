export default {
  id: "wordsmaster",
  name: "WordsMaster: Guess the Word",
  description:
    "Built a game with dynamic scoring (time/streak bonuses), high-score tracking, in-game hints, and sound controls.",
  // Internal details page route (clicking poster/title goes here)
  url: "wordsmaster",
  // External live URL
  live: "https://wordsmaster.netlify.app/",
  // Optional repo link for future use in a details page
  repo: "https://github.com/itsLatifur/WordMaster",
  order: 1,
  // Show this one on the homepage
  visibleOnHome: true,
  // Use the schedule project's poster for now (same look as other case studies)
  poster: require("../../images/schedule/thumb.png"),
  // Later: add your own screenshot to public/images/wordsmaster/thumb.png
  // and set the public path below to switch without code changes.
  posterPublic: "",
};
