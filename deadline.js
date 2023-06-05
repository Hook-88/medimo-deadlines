import {getTimeNumber, getDayNumber} from './helpers.js'

class Deadlines {
  constructor() {
    this.minutesPerDay = 24 * 60
    this.minutesPerWeek = this.minutesPerDay * 7
  }

  getDeadlineTodayHtml() {
    return `
      <p>De deadline vandaag is <strong>${this.getDeadlineToday()}</strong> minuten</p>
      <div class="btns-container">
        <button class="btn-red">Reset deadline</button>
        <button class="btn-green">Kopieer deadline</button>
      </div>
    `
  }
  getDeadlineToday() {
    return this.minutesPerDay - getTimeNumber(document.getElementById('deadline-today-time').value)
  }
  
  getDeadlineBaxterHtml() {
    return `
      <p>De deadline Baxter is <strong>${this.getDeadlineBaxter()}</strong> minuten</p>
      <div class="btns-container">
        <button class="btn-red">Reset deadline</button>
        <button class="btn-green">Kopieer deadline</button>
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


  getDeadlineOrderTimeNumber() {
    return getTimeNumber(document.getElementById('deadline-order-time').value)
  }
  getDeadlineOrderDayNumber() {
    return getDayNumber(document.getElementById('day-select-order').value)
  }
  getDeadlineOrderNumber() {
    return this.getDeadlineOrderTimeNumber() + this.getDeadlineOrderDayNumber()
  }

  getDeadlineDeliveryNumber() {
    return getDayNumber(document.getElementById('day-select-delivery').value)
  }

  getDeadlineDelivery() {
    const deadline = this.getDeadlineDeliveryNumber() - this.getDeadlineOrderNumber()
    return deadline < 0 ? deadline + this.minutesPerWeek : deadline
  }

  getDeadlineDeliveryHtml() {
    return `
      <p>De deadline Leverdag is <strong>${this.getDeadlineDelivery()}</strong> minuten</p>
      <div class="btns-container">
        <button class="btn-red">Reset deadline</button>
        <button class="btn-green">Kopieer deadline</button>
      </div>
    `
  }
}

export {Deadlines}

