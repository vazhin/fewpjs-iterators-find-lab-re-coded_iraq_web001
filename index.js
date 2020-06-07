
function superbowlWin(arrOfObjs) {
  let finded = arrOfObjs.find(element => element.result === "W")
  return finded !== undefined ? finded.year : finded
}
