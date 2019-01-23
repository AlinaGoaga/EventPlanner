class Events {
  constructor (events) {
    events = events || []

      var i = 0
      var removed = 0
      var counter = 1
      var initialLenght = events.length
      while (counter <= initialLenght) {
        if ( events[i].date < reformatDate(new Date().toLocaleDateString()) ) {
           events.splice(i, 1); removed = 1
        }
        if (removed === 0) { i++ }
        removed = 0
        counter ++
    }

    this.eventArray = events.map(function(eventPlan) {
      { return new EventPlan(eventPlan.content, eventPlan.date, eventPlan.time) }
    })

  }

  add (eventPlan) {
    this.eventArray.push(eventPlan);
  }

  convertEvents () {
    var ul = document.createElement('ul')
    var arrayLength = this.eventArray.length
    this.eventArray.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)

   for (let i = 0; i < arrayLength; i++) {
      ul.appendChild(this.eventArray[i].convertEventPlan());
    }

    return ul;
  }
}
