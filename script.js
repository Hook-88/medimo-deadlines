class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.deadlineBaxter = {
      deadlineBaxterPrescriptionTimeNumber: 0,
      deadlineBaxterPrescriptionDayNumber: 0,
      deadlineBaxterPrescriptionNumber: 0,
    }
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
  
  setDeadlineBaxterPrescriptionTimeNumber() {
    this.deadlineBaxter.deadlineBaxterPrescriptionTimeNumber = getTimeNumber(document.getElementById('deadline-baxter-prescription-time').value)
  }
  setDeadlineBaxterPrescriptionDayNumber() {
    this.deadlineBaxter.deadlineBaxterPrescriptionDayNumber = getDayNumber(document.getElementById('day-select-prescription').value)
  }

  setDeadlineBaxterPrescriptionNumber() {
    this.setDeadlineBaxterPrescriptionDayNumber()
    this.setDeadlineBaxterPrescriptionTimeNumber()
    this.deadlineBaxter.deadlineBaxterPrescriptionNumber = 
      this.deadlineBaxter.deadlineBaxterPrescriptionDayNumber + 
      this.deadlineBaxter.deadlineBaxterPrescriptionTimeNumber
    console.log(this.deadlineBaxter.deadlineBaxterPrescriptionDayNumber)
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
    newDeadline.setDeadlineBaxterPrescriptionNumber()
  }
  
})

function render() {
  document.getElementById('deadline-today-result').innerHTML = newDeadline.getDeadlineTodayHtml()
}





