/*
clear() – removes all elements from the map object.
 delete(key) – removes an element specified by the key. It returns if the element is in the map, or false if it does not.
 entries() – returns a new Iterator object that contains an array of [key, value] for each element in the map object. The order of objects in the map is the same as the insertion order.
 forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the this value for each callback.
 get(key) – returns the value associated with the key. If the key does not exist, it returns undefined.
 has(key) – returns true if a value associated with the key exists or false otherwise.
 keys() – returns a new Iterator that contains the keys for elements in insertion order.
 set(key, value) – sets the value for the key in the map object. It returns the map object itself therefore you can chain this method with other methods.
 values() returns a new iterator object that contains values for each element in insertion order.

*/



let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);
console.log('Users Name:-');
for (const user of userRoles.keys()) {
  console.log(user.name);
}
console.log('Roles Name:-');
for (let role of userRoles.values()) {
    console.log(role);
  }
  console.log('Name with Role:-');
  for (const role of userRoles.entries()) {
    console.log(`${role[0].name}: ${role[1]}`);
  }
  console.log('Another Way:-');
  for (let [user, role] of userRoles.entries()) {
    console.log(`${user.name}: ${role}`);
  }