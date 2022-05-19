export function getShortName(name) {
  if (!name) {
    throw Error(`name can't be empty string.`);
  }

  const nameArr = name.split(' ');
  return nameArr.length === 1 ? nameArr[0] : `${nameArr[0]} ${nameArr[nameArr.length - 1]}`;
}

export function photoIsOutdated(photo1, photo2) {
  return photo1 != photo2;
}
