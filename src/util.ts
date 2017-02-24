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

let typeOf = function(obj){
    return ({}).toString.call(obj)
        .match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
export function cloneObject(obj){
    var type = typeOf(obj);
    if (type == 'object' || type == 'array') {
        if (obj.clone) {
            return obj.clone();
        }
        var clone = type == 'array' ? [] : {};
        for (var key in obj) {
            clone[key] = cloneObject(obj[key]);
        }
        return clone;
    }
    return obj;
}