//From two sorted array how would you find common number?
function commonNumber(arr1, arr2) {
  let s1 = new Set(arr1);

  for (let index = 0; index < arr2.length; index++) {
    if (s1.has(arr2[index])) {
      return arr2[index];
    }
  }
  return false;
}
//console.log(commonNumber([1, 3, 5, 7], [0, 2, 4, 7, 9]));

//reverse each word in a sentence
//welcome to java = emoclew ot avaj
function reverseSentance(sentance) {
  let s = sentance.split("").reverse().join(""); //avaj ot emoclew
  console.log(s);
  s = s.split(" ").reverse().join(" "); //emoclew ot avaj
  //the join will add space between each word after the split
  console.log(s);
}
reverseSentance("welcome to java");
