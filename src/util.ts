export function getOptions(props: any): any {
    let options: any = {};
    for(let key in props) {
      if (
        key !== 'children'
        && typeof props[key] !== 'undefined' //exclude undefined ones
        && !key.match(/^on[A-Z]/)     //exclude events
      ) {
        options[key] = props[key];
      }
    }
    return options;
  }

export function getEvents(props: any): any {
    let events: any = {};
    for(let key in props) {
      if (
        typeof props[key] !== 'undefined' &&
        key.match(/^on[A-Z]/)
      ) {
        events[key] = props[key];
      }
    }
    return events;
  }
