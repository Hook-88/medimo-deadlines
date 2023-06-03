class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.deadlineTodayTimeString = ''
    this.deadlineTodayTimeNumber = 0
    this.deadlineBaxter = {
      deadlineBaxterPrescriptionTimeString : '',
      deadlineBaxterPrescriptionDayString: '',
      deadlineBaxterPrescriptionTimeNumber: 0,
      deadlineBaxterPrescriptionDayNumber: 0,
      deadlineBaxterPrescriptionNumber: 0,
    }
  }

  setDeadlineTodayTimeString() {
    this.deadlineTodayTimeString = document.getElementById('deadline-today-time').value
  }
  setDeadlineBaxterPrescriptionTimeString() {
    this.deadlineBaxter.deadlineBaxterPrescriptionTimeString = document.getElementById('deadline-baxter-prescription-time').value
  }
  setDeadlineBaxterPrescriptionDayString() {
    this.deadlineBaxter.deadlineBaxterPrescriptionDayString = document.getElementById('day-select-prescription').value
  }


  setDeadlineTodayTimeNumber() {
    this.setDeadlineTodayTimeString()
    this.deadlineTodayTimeNumber = getTimeNumber(this.deadlineTodayTimeString)
  }

  setDeadlineBaxterPrescriptionTimeNumber() {
    this.setDeadlineBaxterPrescriptionTimeString()
    this.deadlineBaxter.deadlineBaxterPrescriptionTimeNumber = getTimeNumber(this.deadlineBaxter.deadlineBaxterPrescriptionTimeString)
  }
  setDeadlineBaxterPrescriptionDayNumber() {
    this.setDeadlineBaxterPrescriptionDayString()
    this.deadlineBaxter.deadlineBaxterPrescriptionDayNumber = getDayNumber(this.deadlineBaxter.deadlineBaxterPrescriptionDayString)
  }

  setDeadlineBaxterPrescriptionNumber() {
    this.setDeadlineBaxterPrescriptionDayNumber()
    this.setDeadlineBaxterPrescriptionTimeNumber()
    this.deadlineBaxter.deadlineBaxterPrescriptionNumber = 
      this.deadlineBaxter.deadlineBaxterPrescriptionDayNumber + 
      this.deadlineBaxter.deadlineBaxterPrescriptionTimeNumber
    console.log(this.deadlineBaxter.deadlineBaxterPrescriptionNumber)
  }

  getDeadlineToday() {
    this.setDeadlineTodayTimeNumber()
    return this.minutesPerDay - this.deadlineTodayTimeNumber
  }
  getDeadlineTodayHtml() {
    this.getDeadlineToday()
    return `
      <p>De deadline vandaag is <strong>${this.getDeadlineToday()}</strong> minuten</p>
      <button>Kopieer deadline</button>
    `
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





