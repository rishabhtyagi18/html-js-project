function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
      // Primitive value (number, string, boolean, null, undefined)
      return value;
    }
  
    // Handle Date
    if (value instanceof Date) {
      return new Date(value.getTime());
    }
  
    // Handle Array
    if (Array.isArray(value)) {
      return value.map(deepCopy);
    }
  
    // Handle Object
    const copy = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = deepCopy(value[key]);
      }
    }
  
    return copy;
  }

  const original = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "traveling"],
    address: {
      city: "New York",
      coords: { lat: 40.7128, lng: -74.0060 }
    },
    birth: new Date("1993-05-21"),
  };
  
  const cloned = deepCopy(original);
  console.log(cloned);
  
  // Test mutation
  cloned.name = "Bob";
  cloned.hobbies.push("coding");
  console.log("Original:", original.name, original.hobbies);
  console.log("Cloned:", cloned.name, cloned.hobbies);
  