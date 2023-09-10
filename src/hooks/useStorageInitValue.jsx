const useStorageInitValue = (itemName, defaultValue) => {
  const stringStorageItems = localStorage.getItem(itemName)
  let objectStorageItems = defaultValue;
  if (!stringStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(defaultValue))
  } else {
    objectStorageItems = JSON.parse(stringStorageItems)
  }

  return objectStorageItems
}

export { useStorageInitValue }