function flattenObject(obj, parentKey = '', result = {}) {
    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      const propName = parentKey ? `${parentKey}.${key}` : key;
  
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], propName, result);
      } else {
        result[propName] = obj[key];
      }
    }
    return result;
}

const nested = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    },
    g: 5
  };
  
  const flat = flattenObject(nested);
  console.log(flat);
  /*
  {
    "a": 1,
    "b.c": 2,
    "b.d.e": 3,
    "b.d.f": 4,
    "g": 5
  }
  */
  
  
