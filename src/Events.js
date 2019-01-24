class Events {
  constructor (events) {
    events = events || []
    events.filter((e) => { return e.date >= reformatDate(new Date().toLocaleDateString()) })

    this.eventArray = events.map(function(eventPlan) {
      { return new EventPlan(eventPlan.content, eventPlan.date, eventPlan.time) }
    })

  }

  add (eventPlan) {
    this.eventArray.push(eventPlan);
  }

  convertEvents () {
    this.sortEvents()
    var ul = document.createElement('ul')
    for (let i = 0; i < this.eventArray.length; i++) {
      ul.appendChild(this.eventArray[i].convertEventPlan());
    }

    return ul;
  }

  sortEvents () {
    this.eventArray.sort((a, b) => (a.dateTime > b.dateTime) ? 1 : -1)
    return this.eventArray
  }
}
