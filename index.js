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
    if (this.events[eventName]) {
      for (let i = 0; i < this.events[eventName].length; i++) {
        this.events[eventName][i].call(null, args);
      }
    }
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    if (eventName !== '*') {
      if (this.events[eventName]) {
        for (let i = 0; i < this.events[eventName].length; i++) {
          this.events[eventName][i].apply(null, args);
        }
      }
    } else {
      for (let key in this.events) {
        for (let i = 0; i < this.events[key].length; i++) {
          this.events[key][i].apply(null, args);
        }
      }
    }
  }
}