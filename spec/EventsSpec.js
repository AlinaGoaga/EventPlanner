'use strict'
/* global describe, it, expect, EventPlan */

describe('Events', function () {
  let events = new Events
  let e1 = {content: 'Event', date: '2019-04-25', time: '23:45', dateTime: '20190501', convertEventPlan: ()=> {let li = document.createElement('li'); return li; } }
  let e2 = {content: 'Event2', date: '2019-07-23', time: '02:34', dateTime: '20190502', convertEventPlan: ()=> {let li = document.createElement('li'); return li; } }
  let e3 = {content: 'Event2', date: '2019-07-21', time: '02:34', dateTime: '20190502', convertEventPlan: ()=> {let li = document.createElement('li'); return li; } }

  describe('eventArray', function () {
    it('should have an empty array by default', function () {
      expect(events.eventArray.length).toEqual(0)
    })
  })

  describe('add', function () {
    it('should add an event to the array of events', function () {
      events.add(e1);
      expect(events.eventArray[0].content).toEqual('Event')
      expect(events.eventArray[0].date).toEqual('2019-04-25')
      expect(events.eventArray[0].time).toEqual('23:45')
    })
  })

  describe('sortEvents', function () {
    it('should should return an empty array if no events are added', function () {
      let events2 = new Events
      events2.sortEvents()
      expect(events2.eventArray.length).toEqual(0)

    })
    it('should should return an array of sorted events', function () {
      events.add(e2)
      events.add(e3)
      events.sortEvents()
      expect(events.eventArray[0]).toEqual(e1)
      expect(events.eventArray[1]).toEqual(e3)
      expect(events.eventArray[2]).toEqual(e2)
    })
  })

  describe('convertEvents', function () {
    it('should return a div with a number of elements', function () {
      let events3 = new Events
      events3.add(e1);
      events3.add(e2);
      events3.add(e3);
      var ul = events3.convertEvents();
      expect(ul.childElementCount).toEqual(3)
    })
  })
})
