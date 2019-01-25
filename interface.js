function initialize () {

  var main_container = document.getElementById('main_container')
  var individual_event_container = document.getElementById('individual_event_container')

  var button = document.getElementById('button')
  var weatherButton = document.getElementById('weatherbutton')
  var eventsDiv = document.getElementById('events')
  var content = document.getElementById('textbox')
  var date = document.getElementById('date')
  var time = document.getElementById('time')
  var city = document.getElementById('city')
  var weatherDiv = document.getElementById('weather')

  var loadedEvents = JSON.parse(localStorage.getItem('Events'))

  let events = new Events(loadedEvents)
  eventsDiv.appendChild(events.convertEvents())

  button.addEventListener('click', function () {
    eventsDiv.innerHTML = "";
    let eventPlan = new EventPlan(content.value, date.value, time.value)
    events.add(eventPlan)
    localStorage.setItem('Events', JSON.stringify(events.eventArray))
    eventsDiv.appendChild(events.convertEvents())
    content.value = date.value = time.value = ''
  })


  document.addEventListener('clicked_event', function(event) {
    main_container.setAttribute("style", "display: none;");
    individual_event_container.setAttribute("style", "display: inline-block;");
    individual_event_container.appendChild(event.detail.convertEventPlan())
  })

  weatherButton.addEventListener('click', function () {
    var request = new XMLHttpRequest();
    request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&APPID=4f50ce5aeb8f1f079e6f18009dfbfbbc", true);
    request.onload = function () {
      var result = JSON.parse(this.response);
      weatherDiv.innerText = `${result.weather[0].description} ; min temp: ${result.main.temp_min - 273.15}, max temp: ${result.main.temp_max - 273.15}`
    }
    request.send();
  })

  getlocationbutton.addEventListener('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      var crd = position.coords
      var latitude = crd.latitude
      var longitude = crd.longitude
      var request = new XMLHttpRequest();
      request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=4f50ce5aeb8f1f079e6f18009dfbfbbc`, true);
      request.onload = function () {
        var result = JSON.parse(this.response);
        weatherDiv.innerText = `${result.weather[0].description} ; min temp: ${result.main.temp_min - 273.15}, max temp: ${result.main.temp_max - 273.15}`
      }
      request.send();
    });
  })

}

document.addEventListener("DOMContentLoaded", initialize);
