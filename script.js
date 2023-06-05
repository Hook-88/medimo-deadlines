class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.minutesPerWeek = this.minutesPerDay * 7
  }
  getDeadlineToday() {
    return this.minutesPerDay - getTimeNumber(document.getElementById('deadline-today-time').value)
  }
  getDeadlineTodayHtml() {
    this.getDeadlineToday()
    return `
      <p>De deadline vandaag is <strong>${this.getDeadlineToday()}</strong> minuten</p>
      <button>Kopieer deadline</button>
    `
  }
  
  getDeadlineBaxterSendTimeNumber() {
    return getTimeNumber(document.getElementById('deadline-baxter-prescription-time').value)
  }
  getDeadlineBaxterSendDayNumber() {
    return getDayNumber(document.getElementById('day-select-prescription').value)
  }
  getDeadlineBaxterSendNumber() {
    return this.getDeadlineBaxterSendTimeNumber() + this.getDeadlineBaxterSendDayNumber()
  }

  getDeadlineBaxterStartTimeNumber() {
    return getTimeNumber(document.getElementById('deadline-baxter-start-time').value)
  }
  getDeadlineBaxterStartDayNumber() {
    return getDayNumber(document.getElementById('day-select-start-baxter').value)
  }
  getDeadlineBaxterStartNumber() {
    return this.getDeadlineBaxterStartTimeNumber() + this.getDeadlineBaxterStartDayNumber()
  }

  getDeadlineBaxter() {
    const deadline = this.getDeadlineBaxterStartNumber() - this.getDeadlineBaxterSendNumber()
    return deadline < 0 ? deadline + this.minutesPerWeek : deadline
  }


}

function getTimeNumber(str) {
  const hour = parseInt(str.substring(0,2))
  const minutes = parseFloat(str.substring(3))
  return hour * 60 + minutes
}

function getDayNumber(str) {
  return parseFloat(str) * 24 * 60
}

let newDeadline = new Deadlines

document.addEventListener('click', e => {
  if (e.target.id === 'calc-deadline-today-btn') {
    render()
  } else if (e.target.id === 'calc-deadline-baxter-btn') {
    console.log(newDeadline.getDeadlineBaxter())
  }
  
})

function render() {
  document.getElementById('deadline-today-result').innerHTML = newDeadline.getDeadlineTodayHtml()
}





