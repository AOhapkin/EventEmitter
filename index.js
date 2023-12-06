class EventEmitter {
  constructor() {
      this.events = {};
  }

  on(eventName, callback) {
      // code here
      if (!this.events[eventName]) {
          
      }
  }

  off(eventName, callback) {
      // code here
  }

  once(eventName, callback) {
      // code here
  }

  emit(eventName, args) {
      // code here
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, args) {
      // code here
  }
}