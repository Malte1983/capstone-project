export default function loadFromLocal(key) {
  const userEntries = localStorage.getItem(key)
  try {
    const entries = JSON.parse(userEntries)
    return entries
  } catch (error) {
    console.error(error)
  }
}
