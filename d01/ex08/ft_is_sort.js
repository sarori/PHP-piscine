function ft_is_sort(arr) {
  if (arr.join().localeCompare(arr.sort().join()) == 0) return true;
  else return false;
}
// const arr = "a b c d e".split(" ");
if (ft_is_sort(arr)) {
  console.log("The array is sorted");
} else {
  console.log("The array is not sorted");
}
