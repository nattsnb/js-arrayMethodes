const arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

const isNeedle = (element) => element === "needle"

console.log(arr.findIndex(isNeedle))

