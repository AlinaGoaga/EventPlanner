class Events {
  constructor () {
    this.eventArray = []
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
