let sortedArray = [1,2,3,5,6,7,9,12,13,16]

let missingTerm = []

for (let i = 1; i < sortedArray[sortedArray.length - 1]; i++) {
  !sortedArray.includes(i) && missingTerm.push(i);
}
console.log(missingTerm)