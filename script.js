import {Deadlines} from './deadline.js'

let newDeadline = new Deadlines

document.addEventListener('click', e => { 
  if (e.target.id === 'calc-deadline-today-btn') {
    render()
  } else if (e.target.id === 'calc-deadline-baxter-btn') {
    renderBaxterDeadline()
  } else if (e.target.id === 'calc-deadline-delivery-btn') {
    renderDeliveryDeadline()
  }
})


function render() {
  document.getElementById('deadline-today-result').innerHTML = newDeadline.getDeadlineTodayHtml()
}

function renderBaxterDeadline() {
  document.getElementById('deadline-baxter-result').innerHTML = newDeadline.getDeadlineBaxterHtml()
}

function renderDeliveryDeadline() {
  document.getElementById('deadline-delivery-result').innerHTML = newDeadline.getDeadlineDeliveryHtml()
}





