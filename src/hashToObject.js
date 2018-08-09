function hashToObject(hash) {
  const objectString = parseObject(chooseOlder(transformToObjectString(hash)));

  return objectString;
}

function transformToObjectString(hash) {
  const response = hash
    .replace(/([{,]\s*):([^>\s]+)\s*=>/gi, '$1 "$2": ')
    .replace(
      /([{,]\s*)(".+?"|[0-9]+\.?[0-9]*)\s*=>\s*:([^,}\s]+\s*)/gi,
      '$1$2 "$3"zz'
    );

  return response;
}

function chooseOlder(object) {
  const arrayObject = object.split('\n');

  const sortedArrayObject = filterBrackets(arrayObject).sort(); // when you sort and the name is the same, the age was be the first, so the older was the last and when is parsed, the older is the one that is on the object

  return `{${trimArray(sortedArrayObject).join(',\n')}}`;
}

function parseObject(object) {
  return JSON.parse(object);
}

function filterBrackets(hashArray) {
  return hashArray.filter(item => {
    return item !== '{' && item !== '}';
  });
}

function trimArray(array) {
  return array.map(item => item.trim().replace(/,\s*$/, ''));
}

module.exports = hashToObject;
