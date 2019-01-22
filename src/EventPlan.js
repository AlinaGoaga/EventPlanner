class EventPlan {
  constructor (content, date, time) {
    let today = new Date().toLocaleDateString()

    if (reformatDate(date) < reformatDate(today)) {
      throw new Error('Cannot create an event in the past')
    }

    this.content = content
    this.date = date
    this.time = time
    this.dateTime = (date + time).replace(/[^0-9]/g, "")
  }

  convertEventPlan () {
    const li = document.createElement('li')
    li.innerText = `${this.content} on ${this.date} at ${this.time}`
    return li
  }
}

function reformatDate (date) {
  var splitDate = date.split('/')
  var reverseDate = splitDate.reverse()
  var joinDate = reverseDate.join('-')

  return joinDate
}
