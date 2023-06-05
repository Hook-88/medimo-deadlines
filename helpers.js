function getTimeNumber(str) {
  const hour = parseInt(str.substring(0,2))
  const minutes = parseFloat(str.substring(3))
  return hour * 60 + minutes
}

function getDayNumber(str) {
  return parseFloat(str) * 24 * 60
}

export {getTimeNumber, getDayNumber}