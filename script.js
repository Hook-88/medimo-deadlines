import { Deadlines } from './Deadline.js'
import { clearContainer, resetTimeInput, resetDayInput } from './helpers.js'
import {banner} from './banner.js'

let newDeadline = new Deadlines

document.addEventListener('click', e => { 
  if (e.target.dataset.reset) {
    clearContainer(e.target.dataset.reset)
    resetTimeInput(document.querySelectorAll(`[data-time-input="${e.target.dataset.reset}"]`))
    resetDayInput(document.querySelectorAll(`[data-day-input="${e.target.dataset.reset}"]`))
  } else if(e.target.dataset.copy) {
    navigator.clipboard.writeText(newDeadline[e.target.dataset.copy])
    banner.handleCopyBanner()
  }
})

document.addEventListener('change', e => {
  if(e.target.id === 'deadline-today-time') {
    renderDeadlineToday()
  } else if(e.target.dataset.baxter) {
    newDeadline.setDeadlineBaxter()
    newDeadline.deadlineBaxter ? renderBaxterDeadline() : false
  } else if(e.target.dataset.delivery) {
    newDeadline.setDeadlineDelivery()
    newDeadline.deadlineDelivery ? renderDeliveryDeadline() : false
  }
})

function renderDeadlineToday() {
  document.getElementById('deadline-today-result').innerHTML = newDeadline.getDeadlineTodayHtml()
}

function renderBaxterDeadline() {
  document.getElementById('deadline-baxter-result').innerHTML = newDeadline.getDeadlineBaxterHtml()
}

function renderDeliveryDeadline() {
  document.getElementById('deadline-delivery-result').innerHTML = newDeadline.getDeadlineDeliveryHtml()
}





