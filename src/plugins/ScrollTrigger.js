import Vue from 'vue';

const ScrollTrigger = {
  events: [],
  setSubject: function(subject, triggerY) {
    const { events } = this;
    const findedSubject = events.find(item => item.subject === subject);
    if(findedSubject) {
      findedSubject.triggerY = triggerY;
    } else {
      events.push({ subject, triggerY, scrollEvents: [] });
    }
  },
  addEvent: function(subject, element, callback) {
    const { events } = this;
    const findedSubject = events.find(item => item.subject === subject);
    if(!findedSubject) return;

    const { scrollEvents } = findedSubject;
    scrollEvents.push({ element, callback, execute: false });
  },
  eventsOn: function(subject) {
    const { events } = this;
    const findedSubject = events.find(item => item.subject === subject);
    if(!findedSubject) return;
    
    findedSubject.subject.addEventListener('scroll', () => {
      const { scrollEvents } = findedSubject;
      const { subject } = findedSubject;
      const { triggerY } = findedSubject;

      const clientHeight = subject.clientHeight;
      for(let i=0; i<scrollEvents.length; i++) {
        const { element, callback, execute } = scrollEvents[i];
        if(element.getBoundingClientRect().top < clientHeight * (triggerY / 100) && !execute) {
          scrollEvents[i].execute = true;
          callback();
        }
      }
    });
  },
  clearEvent: function(subject) {
    const { events } = this;
    const findedSubject = events.find(item => item.subject === subject);
    if(!findedSubject) return;

    findedSubject.scrollEvents = [];
    const cloneSubject = findedSubject.subject.cloneNode(true);
    subject.parentNode.replaceChild(cloneSubject, findedSubject.subject);
  }
}

Vue.prototype.$scroll = ScrollTrigger;