// code your solution here

const isWin = function (element) {
  return element.result === "W";
};

function superbowlWin(record) {
  const firstWin = record.find(isWin);
  //   if (firstWin === undefined) {
  //     return undefined;
  //   }
  //   return firstWin.year;

  return firstWin ? firstWin.year : undefined;
}
