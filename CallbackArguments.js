// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    // console.log(i);
    if (arr[i] === "Waldo") {
      found(arr[2], i);   // execute callback
    }
  }
}

function actionWhenFound(waldo, index) {
  console.log("Found " + waldo + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);