// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, number){
    // console.log(number);
    // console.log(arr);
    if (name == "Waldo") {
      // console.log(arr)
      found(arr[2], number);   // execute callback
    }
  });
}

function actionWhenFound(waldo, index) {
  console.log("Found " + waldo + " at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
