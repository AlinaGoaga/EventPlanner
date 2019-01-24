'use strict'
/* global describe, it, expect, EventPlan */

describe('Events', function () {
  let events = new Events
  let e1 = {content: 'Event', date: '2019-04-25', time: '23:45', dateTime: '20190501', convertEventPlan: ()=> {} }
  let e2 = {content: 'Event2', date: '2019-07-23', time: '02:34', dateTime: '20190502', convertEventPlan: ()=> {} }

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

  // describe('convertEvents', function () {
  //   it('should return a div with a number of elements', function () {
  //     events.add(e1);
  //     events.add(e2);
  //     events.convertEvents();
  //     expect(events.childElementCount).toEqual(2)
  //   })
  // })
})
