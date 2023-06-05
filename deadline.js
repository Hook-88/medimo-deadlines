import { getTimeNumber, getDayNumber } from './helpers.js'

class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.minutesPerWeek = this.minutesPerDay * 7
    this.deadlineToday = null
    this.deadlineBaxter = null
    this.deadlineDelivery = null
  }

  getDeadlineTodayHtml() {
    this.deadlineToday = this.getDeadlineToday()
    return `
      <p>De deadline vandaag is <strong>${this.deadlineToday}</strong> minuten</p>
      <div class="btns-container">
        <button 
          class="btn-red" 
          data-reset="deadline-today-result"
          >
            Reset deadline
        </button>
        <button 
          class="btn-green"
          data-copy="deadlineToday"
          >Kopieer deadline</button>
      </div>
    `
  }
  getDeadlineToday() {
    return this.minutesPerDay - getTimeNumber(document.getElementById('deadline-today-time').value)
  }
  
  getDeadlineBaxterHtml() {
    this.deadlineBaxter = this.getDeadlineBaxter()
    return `
      <p>De deadline Baxter is <strong>${this.deadlineBaxter}</strong> minuten</p>
      <div class="btns-container">
        <button 
          class="btn-red"
          data-reset="deadline-baxter-result"
          >
            Reset deadline
          </button>
        <button 
          class="btn-green"
          data-copy="deadlineBaxter"
          >Kopieer deadline</button>
      </div>
    `
  }
  getDeadlineBaxter() {
    const deadline = this.getDeadlineBaxterStartNumber() - this.getDeadlineBaxterSendNumber()
    return deadline < 0 ? deadline + this.minutesPerWeek : deadline
  }

  getDeadlineBaxterStartNumber() {
    return this.getDeadlineBaxterStartTimeNumber() + this.getDeadlineBaxterStartDayNumber()
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
  getDeadlineDeliveryHtml() {
    this.deadlineDelivery = this.getDeadlineDelivery()
    return `
      <p>De deadline Leverdag is <strong>${this.deadlineDelivery}</strong> minuten</p>
      <div class="btns-container">
        <button 
          class="btn-red"
          data-reset="deadline-delivery-result"
          >
            Reset deadline
          </button>
        <button 
          class="btn-green"
          data-copy="deadlineDelivery"
          >Kopieer deadline</button>
      </div>
    `
  }
  getDeadlineDelivery() {
    const deadline = this.getDeadlineDeliveryNumber() - this.getDeadlineOrderNumber()
    return deadline < 0 ? deadline + this.minutesPerWeek : deadline
  }
  getDeadlineDeliveryNumber() {
    return getDayNumber(document.getElementById('day-select-delivery').value)
  }

  getDeadlineOrderNumber() {
    return this.getDeadlineOrderTimeNumber() + this.getDeadlineOrderDayNumber()
  }
  getDeadlineOrderTimeNumber() {
    return getTimeNumber(document.getElementById('deadline-order-time').value)
  }
  getDeadlineOrderDayNumber() {
    return getDayNumber(document.getElementById('day-select-order').value)
  }  
}

export {Deadlines}

