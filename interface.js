function initialize () {

  var button = document.getElementById('button')
  var eventsDiv = document.getElementById('events')
  var content = document.getElementById('textbox')
  var date = document.getElementById('date')
  var time = document.getElementById('time')

  //load the events array from the Local Storage
  var loadedEvents = JSON.parse(localStorage.getItem('Events'))

  //create the new events object by going through each individual event plan that has been loaded
  let events = new Events(loadedEvents)
  eventsDiv.appendChild(events.convertEvents())

  button.addEventListener('click', function () {
    eventsDiv.innerHTML = "";
    let eventPlan = new EventPlan(content.value, date.value, time.value)
    events.add(eventPlan)
    //saves the events array in the Local Storage
    localStorage.setItem('Events', JSON.stringify(events.eventArray))
    eventsDiv.appendChild(events.convertEvents())
    content.value = date.value = time.value = ''
  })

}

 document.addEventListener("DOMContentLoaded", initialize);
