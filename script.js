class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.deadlineTodayTimeString = ''
    this.deadlineTodayTimeNumber = 0
  }

  setDeadlineTodayTimeString() {
    this.deadlineTodayTimeString = document.getElementById('deadline-today-time').value
  }

  setDeadlineTodayTimeNumber() {
    this.setDeadlineTodayTimeString()
    
    const hour = parseInt(this.deadlineTodayTimeString.substring(0,2))
    const minutes = parseFloat(this.deadlineTodayTimeString.substring(3))
    this.deadlineTodayTimeNumber = hour * 60 + minutes
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

let newDeadline = new Deadlines

document.addEventListener('click', e => {
  if (e.target.id === 'calc-deadline-today-btn') {
    render()
  }
  
})

function render() {
  document.getElementById('deadline-today-result').innerHTML = newDeadline.getDeadlineTodayHtml()
}





