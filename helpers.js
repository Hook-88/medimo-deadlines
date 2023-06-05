function getTimeNumber(str) {
  const hour = parseInt(str.substring(0,2))
  const minutes = parseFloat(str.substring(3))
  return hour * 60 + minutes
}

function getDayNumber(str) {
  return parseFloat(str) * 24 * 60
}

function clearContainer(containerEl) {
  document.getElementById(containerEl).innerHTML = ''
}

function resetTimeInput(inputElArray) {
  inputElArray.forEach(input => {
    input.value = "00:00"
  });
}

export {getTimeNumber, getDayNumber, clearContainer, resetTimeInput}