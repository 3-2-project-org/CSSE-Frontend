export const getDataFromLocalStorage = (key) => {
  const data = localStorage?.getItem(key);
  const jsonData = JSON.parse(data);
  return jsonData;
};

export const setDataToLocalStorage = async (key, data) => {
  localStorage?.setItem(key, JSON.stringify(data));
};

export const removeDataFromLocalStorage = async (key) => {
  localStorage?.removeItem(key);
};
