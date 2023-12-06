class EventEmitter {
  constructor() {
      this.events = {};
  }

  on(eventName, callback) {
      // code here
      if (!this.events[eventName]) {
        this.events[eventName] = [];
        this.events[eventName].push(callback);
      } else {
        this.events[eventName].push(callback);
      }
  }

  off(eventName, callback) {
      // code here
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(item => item !== callback);
      }
  }

  once(eventName, callback) {
      // code here
      const onceF = (fn) => {
        const f = (arg) => {
          this.off(eventName, f);
          return fn(arg);
        };
  
        return f;
      };

      this.on(eventName, onceF(callback));
  }

  emit(eventName, args) {
      // code here
      if (this.events[eventName]) {
        this.events[eventName].forEach(event => {
          event.call(null, args);
        });
      }
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, args) {
      // code here
  }
}