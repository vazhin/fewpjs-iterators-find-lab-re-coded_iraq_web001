const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = (arrOfObjs) => {
  let result = arrOfObjs.filter(obj => obj.result === "W")
  result === -1 ? 'undefined' : result[0].year
}
