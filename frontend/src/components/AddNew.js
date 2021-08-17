export const handleCheckboxChange = (key, sendTo, setSendTo) =>
  setSendTo(new Map(sendTo.set(key, !sendTo.get(key))));

export const createFalseMap = (map, keys) => {
  const map1 = new Map();
  for (let i = 0; i < map.size; i++) {
    map1.set(keys[i], false);
  }
  return map1;
};
