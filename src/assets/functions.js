//function to shuffle order of mlbTeams
function shuffle(array) {
  let newArray = [...array];
  newArray.sort(() => Math.random() - 0.5);
  return newArray;
}

export { shuffle };
