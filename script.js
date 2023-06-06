import {Deadlines} from './deadline.js'
import { clearContainer, resetTimeInput, resetDayInput } from './helpers.js'

let newDeadline = new Deadlines

document.addEventListener('click', e => { 
  if (e.target.id === 'calc-deadline-today-btn') {
    renderDeadlineToday()
  } else if (e.target.id === 'calc-deadline-baxter-btn') {
      newDeadline.setDeadlineBaxter()
      if(newDeadline.deadlineBaxter) {
        renderBaxterDeadline()
      }  
  } else if (e.target.id === 'calc-deadline-delivery-btn') {
    newDeadline.setDeadlineDelivery()
    if (newDeadline.deadlineDelivery) {
      renderDeliveryDeadline()
    }
  } else {
    if (e.target.dataset.reset) {
      clearContainer(e.target.dataset.reset)
      resetTimeInput(document.querySelectorAll(`[data-time-input="${e.target.dataset.reset}"]`))
      resetDayInput(document.querySelectorAll(`[data-day-input="${e.target.dataset.reset}"]`))
    } else if(e.target.dataset.copy) {
      navigator.clipboard.writeText(newDeadline[e.target.dataset.copy])
    }
  }
  
})

document.addEventListener('change', e => {
  if(e.target.id === 'deadline-today-time') {
    renderDeadlineToday()
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





