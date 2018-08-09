const hashToObject = require('./hashToObject');

function orderElements(people, key) {
  return JSON.stringify(orderByKey(hashToObject(people), key));
}

function orderByKey(object, key) {
  return Object.entries(object)
    .sort(([_, a], [__, b]) => {
      return a[key] > b[key];
    })
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

module.exports = orderElements;
