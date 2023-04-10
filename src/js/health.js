export default function sortedHealth(arr) {
  const cloneArr = [...arr];
  return cloneArr.sort((a, b) => b.health - a.health);
}
