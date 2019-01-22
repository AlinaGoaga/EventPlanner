function initialize () {

  let events = new Events()

  var button = document.getElementById('button')
  var eventsDiv = document.getElementById('events')
  var content = document.getElementById('textbox')
  var date = document.getElementById('date')
  var time = document.getElementById('time')

  button.addEventListener('click', function () {
    eventsDiv.innerHTML = "";
    let eventPlan = new EventPlan(content.value, date.value, time.value)
    events.add(eventPlan)
    eventsDiv.appendChild(events.convertEvents())
    content.value = date.value = time.value = ''
  })

}


 document.addEventListener("DOMContentLoaded", initialize);
